# Conversor de Números Romanos ↔ Arábigos

**Proyecto:** conversor de números romanos a arábigos y viceversa (A2R, R2A)

## Descripción

Pequeña aplicación web (HTML, CSS, JavaScript) que permite:

* Convertir **números arábigos → números romanos** (A2R).
* Convertir **números romanos → números arábigos** (R2A).
* Validaciones básicas (rangos y formato).

La idea es una página simple con inputs para ambos modos, botones para convertir y mostrar el resultado en pantalla.

## Previsualización

![Captura del repositorio](/mnt/data/Captura de pantalla 2025-11-25 040127.png)

> Nota: la imagen anterior muestra la estructura del repositorio.

## Tecnologías

* HTML
* CSS
* JavaScript (vanilla)

## Estructura de archivos (ejemplo)

```
/ (raíz del repo)
├─ índice.html         # página principal (puede llamarse index.html)
├─ estilo.css          # estilos
├─ script.js           # lógica de interacción en la página
├─ romanos.js          # funciones de conversión A2R y R2A (opcional)
└─ API/                # (opcional) carpeta con endpoints si existe una API
```

> Ajustá los nombres si tus archivos reales se llaman diferente (por ejemplo `indice.html`).

## Cómo usar (modo simple — abrir localmente)

1. Cloná o descargá el repositorio.
2. Abrí `índice.html` en tu navegador (doble clic o `Abrir con → navegador`).
3. Usá las cajas de texto para ingresar: un entero (A2R) o un número romano (R2A).
4. Hacé clic en el botón **Convertir** correspondiente y verás el resultado.

## Reglas / validaciones recomendadas

* **A2R (arábigo → romano):** aceptar enteros positivos en el rango habitual (p. ej. 1–3999). Si el número está fuera de rango, mostrar mensaje de error.
* **R2A (romano → arábigo):** validar que la cadena sea un número romano correcto (permitir mayúsculas y minúsculas, pero normalizar internamente). Mostrar error si no coincide con el patrón.

## Ejemplos de uso

* A2R: `1994` → `MCMXCIV`
* R2A: `MMXXV` → `2025`

## Sugerencias de implementación (funciones clave)

```js
// arabigo a romano (pseudocódigo)
function arabeARomano(num) {
  // validaciones: entero, 1 <= num <= 3999
  // mapa de valores y construccion por resta
}

// romano a arabigo
function romanoAArabe(str) {
  // normalizar, validar con regex, convertir sumando/restando
}
```

## Probar y depurar

* Abrí la consola del navegador (F12) para ver errores de JavaScript.
* Agregá tests simples (casos límite: 0, 1, 4, 9, 40, 90, 400, 900, 3999, y cadenas romanas inválidas).

## Contribuir

1. Hacé un fork del repo.
2. Creá una branch nueva con tu feature o corrección.
3. Hacé un pull request describiendo el cambio.

## Licencia

Licencia MIT — podés adaptarla según prefieras.

## Contacto

Si querés, puedo generar el archivo `README.md` listo para subir al repo o incluso crear el branch con el README (si me decís cómo querés el contenido exacto).
