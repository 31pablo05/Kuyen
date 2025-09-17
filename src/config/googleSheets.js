// 🔧 CONFIGURACIÓN GOOGLE SHEETS
// Cambia estos valores para conectar tu propia hoja de Google Sheets

export const GOOGLE_SHEETS_CONFIG = {
  // ID de tu Google Sheet (parte del enlace entre /d/ y /edit)
  // Ejemplo: si tu enlace es https://docs.google.com/spreadsheets/d/1ABC123xyz789/edit
  // El ID sería: 1ABC123xyz789
  SHEET_ID: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms', // ID de ejemplo público
  
  // Nombre de la hoja y rango de celdas
  SHEET_NAME: 'Productos', // Cambia si tu hoja se llama diferente
  RANGE: 'A1:G1000', // Rango de celdas a leer (A1:G1000 = columnas A-G, filas 1-1000)
  
  // API Key pública de Google Sheets (NO cambiar a menos que uses tu propia API key)
  API_KEY: 'AIzaSyBpKpTgLIhIyZ3zCJZo2ZHl-fI5xgS4Uo0',
  
  // Configuración de actualización
  AUTO_REFRESH_INTERVAL: 300000, // 5 minutos en milisegundos (300000ms = 5min)
  ENABLE_AUTO_REFRESH: false, // Cambiar a true para actualización automática
};

// 📋 ESTRUCTURA DE COLUMNAS REQUERIDA
// Tu Google Sheet DEBE tener estas columnas en la primera fila:
export const REQUIRED_COLUMNS = {
  ID: 'A', // Número único para cada producto
  NOMBRE: 'B', // Nombre del producto
  DESCRIPCION: 'C', // Descripción detallada
  IMAGEN: 'D', // URL de la imagen
  PRECIO: 'E', // Precio sin símbolos (solo números)
  STOCK: 'F', // Cantidad disponible
  CATEGORIA: 'G', // Categoría del producto
};

// 🎯 EJEMPLOS DE CONFIGURACIÓN RÁPIDA

// Para usar tu propia hoja, cambia solo esto:
// SHEET_ID: 'TU_ID_AQUI'
// SHEET_NAME: 'TU_NOMBRE_HOJA' (si no se llama 'Productos')

// Para hoja con más columnas:
// RANGE: 'A1:J1000' (si tienes columnas hasta J)

// Para activar actualización automática cada 5 minutos:
// ENABLE_AUTO_REFRESH: true

export default GOOGLE_SHEETS_CONFIG;