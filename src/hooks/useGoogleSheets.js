import { useState, useEffect, useCallback } from 'react';
import { GOOGLE_SHEETS_CONFIG } from '../config/googleSheets.js';

/**
 * Hook personalizado para conectar con Google Sheets
 * @param {string} sheetId - ID de la hoja de Google Sheets (opcional, usa config por defecto)
 * @param {string} range - Rango de celdas (opcional, usa config por defecto)
 * @returns {object} - { data, loading, error, refetch }
 */
const useGoogleSheets = (
  sheetId = GOOGLE_SHEETS_CONFIG.SHEET_ID, 
  range = `${GOOGLE_SHEETS_CONFIG.SHEET_NAME}!${GOOGLE_SHEETS_CONFIG.RANGE}`
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URL de la API pública de Google Sheets
  const SHEETS_API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${GOOGLE_SHEETS_CONFIG.API_KEY}`;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(SHEETS_API_URL);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.values || result.values.length === 0) {
        throw new Error('No se encontraron datos en la hoja');
      }

      // Convertir filas en objetos usando la primera fila como headers
      const [headers, ...rows] = result.values;
      const products = rows
        .filter(row => row.length > 0 && row[0]) // Filtrar filas vacías
        .map((row, index) => {
          const product = {};
          headers.forEach((header, i) => {
            product[header.toLowerCase().trim()] = row[i] || '';
          });
          
          // Asegurar que tenga un ID único
          product.id = product.id || `sheet-${index}`;
          
          // Convertir precio y stock a números
          product.precio = parseFloat(product.precio) || 0;
          product.stock = parseInt(product.stock) || 0;
          
          return product;
        });

      setData(products);
    } catch (err) {
      console.error('Error al cargar datos de Google Sheets:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [SHEETS_API_URL]);

  useEffect(() => {
    if (sheetId) {
      fetchData();
      
      // Auto-refresh si está habilitado
      let intervalId;
      if (GOOGLE_SHEETS_CONFIG.ENABLE_AUTO_REFRESH && GOOGLE_SHEETS_CONFIG.AUTO_REFRESH_INTERVAL) {
        intervalId = setInterval(fetchData, GOOGLE_SHEETS_CONFIG.AUTO_REFRESH_INTERVAL);
      }
      
      return () => {
        if (intervalId) clearInterval(intervalId);
      };
    }
  }, [sheetId, fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData
  };
};

export default useGoogleSheets;