import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Astro 7 usa por defecto reglas de espacios de JSX, que eliminan los espacios entre texto y etiquetas
  compressHTML: true,
  integrations: [react()],
  image: {
    domains: ['res.cloudinary.com']
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
