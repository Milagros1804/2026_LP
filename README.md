# 🎓 Portafolio Dina Milagros Delgado Quispe

Portafolio web para Lenguaje de Programación 1 con **56 ejercicios completos** ya cargados.

## ✨ Características

- ✅ **56 ejercicios de C/C++ ya incluidos** organizados en 7 actividades
- ✅ Diseño moderno con colores púrpura, turquesa y coral
- ✅ Sistema de filtrado por actividad
- ✅ Visualización de código fuente y salida de cada programa
- ✅ Modal para agregar más ejercicios
- ✅ Completamente responsive
- ✅ Estructura idéntica a tu página original

## 📁 Estructura de Archivos

```
portfolio/
├── index.html          # Página principal
├── style.css           # Estilos (nuevos colores)
├── script.js           # 56 ejercicios ya cargados + funcionalidad
├── img/
│   └── foto.jpg        # TU FOTO AQUÍ (coloca tu foto con este nombre)
└── README.md           # Este archivo
```

## 🚀 Instalación

### Paso 1: Agregar tu foto

1. Coloca tu foto en la carpeta `img/` con el nombre `foto.jpg`
2. Si tu foto tiene otro nombre o formato, actualiza la línea 42 en `index.html`:
   ```html
   <img src="img/foto.jpg" alt="Dina Milagros Delgado Quispe">
   ```

### Paso 2: Subir a GitHub

1. Crea un nuevo repositorio en GitHub llamado `LP_Nivel`
2. Sube todos los archivos a ese repositorio
3. Ve a Settings → Pages
4. Selecciona rama `main` y carpeta `/ (root)`
5. Guarda y espera 1-2 minutos

Tu sitio estará en: `https://TU-USUARIO.github.io/LP_Nivel/`

## 📊 Ejercicios Incluidos

### Actividad 1 (1 ejercicio)
- Ejercicio 1: Tipos de datos básicos

### Actividad 2 (5 ejercicios)
- Ejercicio 2-6: if-else, switch, for, while, do-while, operadores

### Actividad 3 (5 ejercicios)
- Ejercicio 7-11: Número perfecto, Fibonacci, validador de contraseña, conversión de bases, juego de adivinanza

### Actividad 4 (1 ejercicio)
- Ejercicio 12: Conversiones de tipos

### Actividad 5 (20 ejercicios)
- Ejercicio 13-32: Funciones, arrays, validaciones, normalizaciones

### Actividad 6 (4 ejercicios)
- Ejercicio 33-36: Estadísticas descriptivas, normalización, validación de sensores

### Actividad 7 (20 ejercicios)
- Ejercicio 37-56: Operadores, macros, bucles

**Total: 56 ejercicios completos con código y salida**

## ✏️ Cómo agregar más ejercicios

Hay dos formas:

### Opción 1: Usando la interfaz (en el navegador)
1. Abre tu página
2. Click en "Ver Ejercicios" en cualquier unidad
3. Click en "Agregar Nuevo Ejercicio"
4. Llena el formulario y guarda

⚠️ **Nota:** Los ejercicios agregados así solo se guardan en tu navegador

### Opción 2: Editando el código (permanente)
Edita `script.js` y agrega al objeto `ejerciciosDB`:

```javascript
ejerciciosDB[NUMERO_ACTIVIDAD].push({
    numero: 57,
    titulo: "Mi nuevo ejercicio",
    lenguaje: "C",
    codigo: `#include <stdio.h>
int main() {
    printf("Hola");
    return 0;
}`,
    salida: `Hola`
});
```

## 🎨 Colores del Diseño

Los colores actuales son:
- **Primario:** #9D4EDD (Púrpura)
- **Secundario:** #10B981 (Verde/Turquesa)
- **Acento:** #F472B6 (Rosa/Coral)
- **Fondo:** Degradado oscuro

Para cambiar colores, edita las líneas 10-17 de `style.css`:

```css
:root {
    --primary-color: #9D4EDD;      /* Cambia este */
    --secondary-color: #10B981;    /* Y este */
    --accent-color: #F472B6;       /* Y este */
}
```

## 🔧 Características de la Unidad 1

✅ **56 ejercicios completos** ya cargados en el sistema
✅ Código fuente visible con formato
✅ Salida de cada programa mostrada
✅ Filtro por actividad (1-7)
✅ Botón para agregar más ejercicios
✅ Contador automático de ejercicios
✅ Modal con visualización profesional

## 📱 Responsive

El diseño se adapta automáticamente a:
- 📱 Móviles
- 📱 Tablets  
- 💻 Escritorio

## ⚠️ Importante

- La carpeta `img/` debe contener tu foto `foto.jpg`
- Todos los archivos deben estar en la raíz del repositorio
- Los nombres de archivo deben ser exactos: `index.html`, `style.css`, `script.js`

## 🎯 Diferencias con tu página original

- ✅ Misma estructura HTML
- ✅ Mismos textos y secciones
- ✅ Misma organización (2 unidades)
- ✨ Nuevos colores (púrpura/turquesa/coral)
- ✨ **56 ejercicios completos ya cargados** en Unidad 1
- ✨ Sistema funcional para ver y agregar ejercicios

## 💡 Tips

1. **No pierdas los ejercicios:** Los 56 ejercicios ya están en el código
2. **Agregar más:** Usa el modal o edita `script.js`
3. **Personalizar:** Cambia colores en `style.css`
4. **Tu foto:** Colócala en `img/foto.jpg`

## 📞 Soporte

Si algo no funciona:
1. Verifica que todos los archivos estén subidos
2. Revisa la consola del navegador (F12)
3. Asegúrate de que la carpeta `img/` tenga tu foto

---

**¡Todo listo! 56 ejercicios funcionando y listos para mostrar! 🚀**
