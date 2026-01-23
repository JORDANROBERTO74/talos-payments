# Análisis: sección Enterprise y selección de marca

## 1. Estructura DOM y contenedor

La sección corresponde al componente **`Enterprise`** en `src/components/landing/enterprise.tsx`.

**Jerarquía DOM:**
```
main.min-h-screen
└── section.bg-white.py-24.diagonal-container.-mt-10.relative.z-25
    └── div.diagonal-content-reverse.max-w-[1080px].mx-auto.px-6.md:px-0
        ├── Header (títulos, párrafo, CTA)
        ├── Grid: métricas + tarjeta de imagen
        └── Barra de logos (selección de marca)
```

**Clases relevantes:**
- **`diagonal-container`** (globals.css): `transform: skewY(-6deg)` — inclina todo el bloque de la sección.
- **`diagonal-content-reverse`**: `transform: skewY(6deg)` — deshace la inclinación en el contenido interno para que texto e imágenes se vean rectos.
- **`max-w-[1080px]`**: ancho máximo del contenido; `mx-auto` lo centra.

---

## 2. Contenido de la sección

- **Encabezado:** "Enterprise reinvention" → "Bring agility to your enterprise" + párrafo con enlaces (professional services, certified partners, Salesforce, SAP, Stripe App Marketplace).
- **CTA:** botón "Explore FractalGrid for enterprises".
- **Dos columnas (lg):**
  - **Izquierda:** métricas dinámicas (valor + descripción) y "Products used" según la marca seleccionada.
  - **Derecha:** imagen de fondo (`/images/{bmw|amazon|maersk|twilio}.webp`), overlay de gradiente por marca y headline en la parte inferior.
- **Barra inferior:** cuatro logos (BMW, Amazon, Maersk, Twilio) que actúan como **selectores de marca**.

---

## 3. Cómo funciona la selección de marca

### 3.1 Estado

```ts
const [selectedBrand, setSelectedBrand] = useState<BrandData>(brandData[0]);
const [isTransitioning, setIsTransitioning] = useState(false);
```

- **`selectedBrand`**: marca activa (por defecto `brandData[0]` → BMW). Determina métricas, imagen, headline, productos y colores.
- **`isTransitioning`**: indica que se está cambiando de marca; se usa para animar salida/entrada.

### 3.2 Datos por marca (`BrandData`)

Cada marca tiene:
- `name`, `image`, `headline`
- `metrics`: array de `{ value, description[] }`
- `products`: array de `{ name, icon, color }`
- `logoComponent`: componente React del logo (BMWLogo, AmazonLogo, etc.)

Además existe **`brandOverlays`**: por cada marca, gradiente, sombra y color de borde para la tarjeta y las métricas.

### 3.3 Handler de selección

```ts
const handleBrandSelect = (brand: BrandData) => {
  if (brand.name === selectedBrand.name) return;

  setIsTransitioning(true);
  setTimeout(() => {
    setSelectedBrand(brand);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 50);
  }, 300);
};
```

Flujo:
1. Si se hace clic en la marca ya seleccionada → no hace nada.
2. `isTransitioning = true` → se aplican clases de salida (opacidad, scale).
3. Tras **300 ms** se actualiza `selectedBrand`.
4. Tras **50 ms** más → `isTransitioning = false` → se aplican clases de entrada.

Efecto: fundido + ligero zoom out/in al cambiar de caso de uso.

### 3.4 UI de los logos (selector)

```tsx
{brandData.map((brand, index) => {
  const LogoComponent = brand.logoComponent;
  const isSelected = selectedBrand.name === brand.name;
  return (
    <button
      key={index}
      onClick={() => handleBrandSelect(brand)}
      className={...}
      aria-label={`Select ${brand.name} case study`}
    >
      <LogoComponent />
    </button>
  );
})}
```

- Cada logo es un **`<button>`** que llama a `handleBrandSelect(brand)`.
- **Seleccionado:** `opacity-100`, `scale-110`, `rounded-lg`, etc.
- **No seleccionado:** `opacity-40`, hover `opacity-100` y `scale-105`.

Los logos vienen de `src/components/commons/` (bmw, amazon, maersk, twilio); son SVGs que admiten `className` para estilizar.

---

## 4. Qué cambia al seleccionar una marca

| Elemento | Comportamiento |
|----------|----------------|
| **Métricas (izq.)** | Se reemplazan por `selectedBrand.metrics`; el borde usa `brandOverlays[].borderColor`. |
| **Products used** | Lista `selectedBrand.products` con iconos Material Symbols. |
| **Imagen** | `selectedBrand.image` (Next.js `Image`). |
| **Overlay** | Gradiente y `box-shadow` de `brandOverlays[selectedBrand.name]`. |
| **Headline** | `selectedBrand.headline` en la franja inferior de la imagen. |
| **Logos** | El de la marca activa se resalta (scale + opacidad). |

Todo lo dinámico depende de `selectedBrand` y, durante el cambio, de `isTransitioning` para las animaciones.

---

## 5. Resumen

- La sección **Enterprise** usa un contenedor con skew diagonal y un contenido “enderezado”.
- La **selección de marca** se hace con los cuatro logos de la barra inferior.
- Un solo estado `selectedBrand` + `handleBrandSelect` actualizan métricas, imagen, overlay, headline y productos.
- Una transición de ~300 ms controlada por `isTransitioning` da el efecto de cambio entre casos de uso.
