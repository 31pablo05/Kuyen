# 📊 KUYEN BLANQUERÍA - Sistema de Inventario con Google Sheets

## 🎯 ¿Qué es esto?

Este sistema permite al dueño de Kuyen Blanquería **manejar su inventario directamente desde Google Sheets** sin necesidad de conocimientos técnicos. La página web se actualiza automáticamente con los productos, precios y stock que cargues en la planilla.

---

## 🚀 CONFIGURACIÓN INICIAL

### Paso 1: Crear tu Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja llamada "Inventario Kuyen"
3. En la primera fila (fila 1), crea estas columnas **EXACTAMENTE** así:

```
A1: ID
B1: Nombre  
C1: Descripcion
D1: Imagen
E1: Precio
F1: Stock
G1: Categoria
```

### Paso 2: Configurar permisos

1. Haz clic en "Compartir" (botón verde arriba a la derecha)
2. Cambiar a "Cualquier persona con el enlace"
3. Asegúrate que diga "Lector" (no "Editor")
4. Copia el ID de tu hoja (parte del enlace entre `/d/` y `/edit`)

Ejemplo: Si tu enlace es:
`https://docs.google.com/spreadsheets/d/1ABC123xyz789/edit#gid=0`

El ID es: `1ABC123xyz789`

### Paso 3: Configurar en la web

Envía el ID al programador para que lo configure en el código.

---

## 📝 CÓMO CARGAR PRODUCTOS

### Formato de cada columna:

| Columna | Qué poner | Ejemplo |
|---------|-----------|---------|
| **ID** | Número único para cada producto | 1, 2, 3, 4... |
| **Nombre** | Nombre del producto | "Toallón Premium Algodón" |
| **Descripcion** | Descripción detallada | "Toallón 100% algodón, ultra absorbente..." |
| **Imagen** | URL de la imagen del producto | https://ejemplo.com/imagen.jpg |
| **Precio** | Precio sin símbolos | 2500 |
| **Stock** | Cantidad disponible | 15 |
| **Categoria** | Tipo de producto | "Toallones" |

### Ejemplo completo:

| ID | Nombre | Descripcion | Imagen | Precio | Stock | Categoria |
|----|--------|------------|--------|--------|-------|-----------|
| 1 | Toallón Premium | Toallón 100% algodón ultra suave | https://mi-tienda.com/toallon1.jpg | 2500 | 12 | Toallones |
| 2 | Sábanas Matrimonio | Sábanas de algodón 144 hilos | https://mi-tienda.com/sabanas1.jpg | 4200 | 8 | Sabanas |
| 3 | Acolchado Invierno | Acolchado térmo para clima frío | https://mi-tienda.com/acolchado1.jpg | 8500 | 5 | Acolchados |

---

## ⚡ INSTRUCCIONES DE USO

### ✅ Para AGREGAR un producto:
1. Ve a la última fila con datos
2. En la fila siguiente, completa todas las columnas
3. Guarda automáticamente (Ctrl+S)
4. La web se actualiza en 1-2 minutos

### ✅ Para QUITAR un producto (SIN STOCK):
1. Encuentra el producto en la planilla
2. Cambia la columna "Stock" a **0**
3. Guarda
4. En la web aparecerá como "AGOTADO"

### ✅ Para ELIMINAR completamente un producto:
1. Haz clic derecho en el número de fila
2. Selecciona "Eliminar fila"
3. Guarda

### ✅ Para ACTUALIZAR precios:
1. Busca el producto
2. Cambia el valor en la columna "Precio"
3. Guarda
4. El precio se actualiza automáticamente en la web

### ✅ Para actualizar STOCK después de una venta:
1. Busca el producto vendido
2. Resta la cantidad vendida del stock actual
3. Si queda en 0, aparecerá como "AGOTADO"
4. Guarda

---

## 🖼️ CÓMO SUBIR IMÁGENES

### Opción 1: Google Drive (RECOMENDADO)
1. Sube las fotos a Google Drive
2. Haz clic derecho → "Obtener enlace"
3. Cambia a "Cualquier persona con el enlace"
4. Copia el enlace y úsalo en la columna "Imagen"

### Opción 2: Servicio externo
- Imgur.com (gratis)
- Cloudinary (profesional)
- Tu propio servidor

---

## 🔧 TIPS Y TRUCOS

### ✅ BUENAS PRÁCTICAS:
- **Siempre** usa números únicos en la columna ID
- **No dejes** celdas vacías en productos activos
- **Guarda** después de cada cambio importante
- **Haz backup** de tu planilla semanalmente

### ❌ ERRORES COMUNES:
- ❌ Usar comas en precios (usar solo números: 2500, no 2,500)
- ❌ Dejar ID duplicados
- ❌ Enlaces de imagen que no funcionan
- ❌ Poner texto en la columna Stock (solo números)

### 🚨 SOLUCIÓN DE PROBLEMAS:
- **La web no se actualiza**: Verifica que la hoja sea pública
- **Productos no aparecen**: Revisa que tengan todas las columnas completas
- **Imágenes no se ven**: Verifica que los enlaces funcionen
- **Precios raros**: Usa solo números, sin símbolos

---

## 📞 SOPORTE

Si tienes problemas:
1. Revisa esta guía
2. Verifica que seguiste todos los pasos
3. Contacta al programador con el error específico

---

## 🎯 PLANTILLA DE EJEMPLO

Aquí tienes una plantilla lista para copiar y pegar:

```
ID	Nombre	Descripcion	Imagen	Precio	Stock	Categoria
1	Toallón Premium	Toallón 100% algodón ultra absorbente	https://ejemplo.com/toallon.jpg	2500	10	Toallones
2	Sábanas 2 Plazas	Sábanas algodón 144 hilos	https://ejemplo.com/sabanas.jpg	4200	5	Sabanas  
3	Acolchado Invierno	Acolchado térmico matrimonial	https://ejemplo.com/acolchado.jpg	8500	3	Acolchados
```

¡Tu tienda ahora funciona con inventario en tiempo real! 🎉