# Vendored: ascii-sharks

Fuente: https://github.com/stackedlol/ascii-sharks (MIT — ver LICENSE).
Commit: `a0074c16a106f0abc665fe9712ca445f8f98ad8e` (main, 2026-10-30).

Copia local de `src/` (sin `react.tsx`: este sitio no usa React). El paquete no
está publicado en npm (`"private": true`), por eso se vendoriza.

## Parches locales (renderer.ts)

El sitio necesita el canvas transparente para convivir con el fondo punteado y
el tema claro/oscuro. Tres cambios, todos marcados con `// LOCAL PATCH`:

1. `getContext("2d", { alpha: false })` → `{ alpha: true }`.
2. `paintBackground()`: el relleno `#000` del canvas offscreen pasa a
   `clearRect` (agua transparente; la grilla blanca se conserva).
3. `render()`: se añade `ctx.clearRect` antes de `drawImage(bg)` para borrar el
   frame anterior (sin el fondo opaco, antes quedarían estelas).

El tema claro invierte la paleta desde CSS
(`[data-theme="light"] .ocean-canvas { filter: invert(1) hue-rotate(180deg); }`),
así la paleta "cuerpos claros sobre agua oscura" se lee como tinta oscura sobre
papel sin tocar más código. El color del texto del canvas se toma del
`font-family` computado del elemento (CSS).

Para sincronizar con upstream: copiar los archivos de nuevo y reaplicar los
tres parches.
