import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vertice: {
          forest: "#061A14",   // Fondo base ultra-oscuro (cambiado para estilo Arcturis)
          emerald: "#168369",  // Verde técnico vibrante
          mint: "#32BE98",     // Acento brillante
          dark: "#0A1F19",     // Tarjetas y superficies
          slate: "#94A3B8",    // Texto secundario
          border: "rgba(22, 131, 105, 0.2)", // Bordes translúcidos
        },
      },
      fontFamily: {
  display: ["var(--font-space)", "sans-serif"],
  body: ["var(--font-inter)", "sans-serif"],
},
      backgroundImage: {
        // La grilla técnica de precisión
        'grid-blueprint': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(22, 131, 105, 0.05)' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;