import type { Config } from "tailwindcss";
import tailwindcssTypography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // 여기서 다크 모드를 'class'로 설정
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' }, // 백틱 제거
            "code::after": { content: '""' }, // 백틱 제거
            code: {
              backgroundColor: "hsl(var(--muted))",
              fontWeight: "600",
              padding: "2px 4px",
              borderRadius: "4px",
            },
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [tailwindcssTypography],
} satisfies Config;
