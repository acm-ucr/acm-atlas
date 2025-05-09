/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        acm: {
          "yellow-100": "#fff6d1",
          "yellow-200": "#fff3c3",
          "yellow-300": "#ffe6af",
          "yellow-500": "#f5d166",
          "orange-400": "#ffac01",
          "gray-100": "#e4e4e4",
          "gray-200": "#47484a",
          "gray-400": "#8e8e8e",
          "gray-500": "#444444",
          "blue-100": "#ddf4ff",
          "blue-200": "#ccebfd",
          "blue-400": "#91b9ff",
          "blue-500": "#2391ff",
          "blue-600": "#5e99ff",
          "blue-700": "#4185fc",
          "blue-800": "#ccebfd",
          navy: "#173967",
          turquoise: "#3bc5bb",
          "purple-100": "#e1c5ff",
          "purple-200": "#b889ea",
          "green-100": "#c5ecc0",
          "green-200": "#44624a",
          "green-300": "#c9ff9b",
          "green-400": "#1f3f3d",

          red: "#dd2c00",

          eslint: "#8080f2",
          typescript: "#3178c6",
          tailwindcss: "#38bdf8",
          prettier: "#e8bc5c",

          arduino: "#19999e",
          raspberrypi: "#c31c4a",
          qt: "#2cde85",

          invision: "#ff2962",
          figma: "#1abcfe",
          adobexd: "#ff61f6",

          python: "#ffce3d",
          r: "#246abe",
          numpy: "#4dabcf",
          pytorch: "#ee4c2c",
          scikit: "#f89939",
        },

        dropShadow: {
          "3xl-acm-blue-500": "0 10px 20px rgba(79, 167, 255, 1)",
          "3xl-acm-yellow-400": "0 10px 20px rgba(255, 234, 148, 1)",
          "3xl-acm-blue-100": "0 10px 20px rgba(157, 216, 255, 1)",
          "3xl-acm-gray-400": "0 10px 20px rgba(142, 142, 143, 1)",
          "3xl-acm-purple-100": "0 10px 20px rgba(219, 186, 255, 1)",
        },

        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        destructive: "oklch(var(--destructive))",
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        chart: {
          "1": "oklch(var(--chart-1))",
          "2": "oklch(var(--chart-2))",
          "3": "oklch(var(--chart-3))",
          "4": "oklch(var(--chart-4))",
          "5": "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-continuation": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-continuation": "marquee-continuation 20s linear infinite",
      },
    },
  },
  plugins: [],
};
