# 🛒 Sistema de Inventario con Google Sheets - Kuyen Blanquería

## 📋 Descripción

Sistema completo que permite al cliente manejar su inventario directamente desde Google Sheets, actualizando la web automáticamente. **Solución práctica y profesional** para e-commerce sin necesidad de backend complejo.

---

## 🏗️ Arquitectura del Sistema

```
src/
├── hooks/
│   └── useGoogleSheets.js          # Hook para conexión con Google Sheets API
├── components/productos/
│   ├── CatalogoSheets.jsx          # Componente principal del catálogo
│   └── catalogo.js                 # Datos estáticos (backup/demo)
├── config/
│   └── googleSheets.js             # Configuración centralizada
├── pages/
│   └── Productos.jsx               # Página con toggle entre modos
└── context/
    └── CarritoContext.jsx          # Integración con carrito existente
```

---

## ⚙️ Configuración Técnica

### 1. Google Sheets API Setup

El sistema usa la **API pública de Google Sheets v4** sin necesidad de autenticación OAuth para hojas públicas.

**Endpoint utilizado:**
```
https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/{RANGE}?key={API_KEY}
```

### 2. Configuración del Cliente

**Archivo:** `src/config/googleSheets.js`

```javascript
export const GOOGLE_SHEETS_CONFIG = {
  SHEET_ID: 'TU_ID_AQUI',              // ⚠️ CAMBIAR POR ID REAL
  SHEET_NAME: 'Productos',             // Nombre de la hoja
  RANGE: 'A1:G1000',                   // Rango de celdas
  API_KEY: 'GOOGLE_API_KEY',            // API Key pública
  AUTO_REFRESH_INTERVAL: 300000,       // 5 minutos
  ENABLE_AUTO_REFRESH: false,          // Deshabilitado por defecto
};
```

### 3. Estructura de Datos Requerida

**Primera fila (headers) OBLIGATORIA:**
```
A1: ID | B1: Nombre | C1: Descripcion | D1: Imagen | E1: Precio | F1: Stock | G1: Categoria
```

**Ejemplo de datos:**
```
1 | Toallón Premium | Toallón 100% algodón | https://img.com/1.jpg | 2500 | 10 | Toallones
2 | Sábanas 2 Plazas | Sábanas algodón 144 hilos | https://img.com/2.jpg | 4200 | 5 | Sabanas
```

---

## 🔧 Funcionalidades Técnicas

### Hook `useGoogleSheets`

```javascript
const { data, loading, error, refetch } = useGoogleSheets(sheetId, range);
```

**Características:**
- ✅ Manejo de estados de carga y error
- ✅ Transformación automática de datos
- ✅ Refresh manual y automático
- ✅ Validación de estructura
- ✅ Cache y optimización

### Componente `CatalogoSheets`

**Props:** Ninguna (usa configuración global)

**Features:**
- 📱 **Responsive:** 1 columna móvil → 4 columnas desktop
- 🎨 **Estados visuales:** Loading, error, empty, success
- 🛒 **Integración carrito:** Compatible con CarritoContext existente
- 🔄 **Actualización:** Manual y automática configurable
- 📊 **Stock management:** Productos agotados manejados automáticamente

### Toggle de Modos

**Archivo:** `src/pages/Productos.jsx`

- **Modo Demo:** Catálogo estático con filtros avanzados
- **Modo Live:** Inventario desde Google Sheets en tiempo real

---

## 🚀 Implementación

### Para Desarrollo/Testing

1. **Usar hoja de ejemplo pública:**
   ```javascript
   SHEET_ID: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms'
   ```

2. **Activar modo live en `/productos`**

3. **Verificar funcionalidad completa**

### Para Producción

1. **Cliente crea su Google Sheet:**
   - Estructura correcta de columnas
   - Permisos públicos (solo lectura)

2. **Desarrollador actualiza configuración:**
   ```javascript
   // src/config/googleSheets.js
   SHEET_ID: 'ID_REAL_DEL_CLIENTE'
   ```

3. **Opcional - Activar auto-refresh:**
   ```javascript
   ENABLE_AUTO_REFRESH: true
   ```

---

## 🔍 Troubleshooting

### Error: "Could not resolve"
- ✅ Verificar que la hoja sea pública
- ✅ Revisar formato del SHEET_ID
- ✅ Confirmar estructura de columnas

### Error: "No data found"
- ✅ Verificar que hay datos en la hoja
- ✅ Revisar rango de celdas (RANGE)
- ✅ Confirmar nombres de headers

### Error: "API quota exceeded"
- ✅ Implementar cache más agresivo
- ✅ Reducir frecuencia de auto-refresh
- ✅ Usar API Key propia con mayor quota

### Productos no aparecen
- ✅ Verificar columnas obligatorias completas
- ✅ Revisar formato de precios (solo números)
- ✅ Confirmar formato de stock (solo números)

---

## 🎯 Ventajas del Sistema

### Para el Cliente
- ✅ **Independencia total:** Maneja inventario sin programador
- ✅ **Familiar:** Usa Google Sheets (como Excel)
- ✅ **Gratis:** No costos adicionales de hosting/base de datos
- ✅ **Inmediato:** Cambios se reflejan en 1-2 minutos

### Para el Desarrollador
- ✅ **Sin backend:** No necesita servidor/base de datos
- ✅ **Escalable:** Hasta 10M celdas por sheet
- ✅ **Confiable:** Infraestructura de Google
- ✅ **Mantenible:** Configuración centralizada

### Para el Negocio
- ✅ **Tiempo real:** Stock actualizado automáticamente
- ✅ **Profesional:** Interfaz moderna y responsive
- ✅ **Flexible:** Fácil añadir/quitar productos
- ✅ **Integrado:** Compatible con carrito existente

---

## 📈 Escalabilidad

### Límites de Google Sheets
- **Celdas:** 10M por hoja
- **Requests:** 1000/minuto por IP
- **Tamaño:** 40MB por hoja

### Para Grandes Inventarios
- Usar múltiples hojas por categoría
- Implementar paginación en frontend
- Cache más agresivo
- Considerar migrar a Airtable o base de datos

---

## 🔐 Seguridad

### Datos Públicos
- ✅ Solo lectura desde la web
- ✅ Cliente mantiene control total
- ✅ No expone datos sensibles (solo productos)

### Best Practices
- 🔒 No incluir costos/márgenes en la hoja pública
- 🔒 Usar hoja separada para datos internos
- 🔒 Backup regular de la hoja
- 🔒 Control de versiones en Git

---

## 📝 Notas de Mantenimiento

- **Monitorear:** Quotas de API de Google
- **Actualizar:** API Key si expira
- **Backup:** Hoja del cliente regularmente
- **Testing:** Verificar después de cambios en Google Sheets

¡Sistema completo y listo para usar! 🚀