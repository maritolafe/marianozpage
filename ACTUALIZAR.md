# Cómo actualizar la página y hacer que los cambios sean visibles

## Problema resuelto

Cuando hacías cambios en los archivos CSS o JavaScript, los navegadores seguían mostrando las versiones antiguas debido al caché del navegador.

## Solución implementada

Se han agregado parámetros de versión a todos los archivos CSS y JavaScript en el archivo `index.html`. Esto fuerza a los navegadores a cargar las nuevas versiones cuando se actualiza el número de versión.

## Cómo actualizar en el futuro

### Cuando hagas cambios en archivos CSS o JavaScript:

1. Edita tus archivos CSS o JavaScript normalmente
2. Abre el archivo `index.html`
3. Busca las líneas que cargan tus archivos (por ejemplo: `href="css/estilo.css?v=1.0.0"`)
4. **Incrementa el número de versión** (por ejemplo, de `v=1.0.0` a `v=1.0.1` o `v=1.1.0`)
5. Guarda y sube los cambios a GitHub

### Ejemplos de cambios de versión:

**Para cambios pequeños (correcciones):**
- De `v=1.0.0` a `v=1.0.1`

**Para cambios medianos (nuevas características):**
- De `v=1.0.0` a `v=1.1.0`

**Para cambios grandes (rediseño completo):**
- De `v=1.0.0` a `v=2.0.0`

### Ubicación de los archivos que necesitan actualización de versión:

En `index.html`, busca estas líneas:

```html
<!-- CSS -->
<link rel="stylesheet" type="text/css" href="css/estilo.css?v=1.0.0" />
<link rel="stylesheet" href="css/bootstrap.min.css?v=1.0.0" />

<!-- JavaScript -->
<script type="text/javascript" src="js/cajas.js?v=1.0.0" defer></script>
<script type="text/javascript" src="js/titulo.js?v=1.0.0" defer></script>
<!-- ... y todos los demás archivos .js -->
```

## Meta tags de caché

También se agregaron meta tags en el `<head>` para controlar el caché del navegador:

```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

Estos ayudan a que el navegador siempre verifique si hay nuevas versiones del HTML.

## Verificar que los cambios funcionan

Después de actualizar:

1. Sube los cambios a GitHub
2. Espera 1-2 minutos para que GitHub Pages se actualice
3. Abre tu página en un navegador
4. Presiona `Ctrl + Shift + R` (Windows/Linux) o `Cmd + Shift + R` (Mac) para hacer una recarga forzada
5. Verifica que tus cambios sean visibles

## Nota importante

**Siempre que modifiques archivos CSS o JavaScript, debes incrementar el número de versión en `index.html` para que los usuarios vean los cambios.**
