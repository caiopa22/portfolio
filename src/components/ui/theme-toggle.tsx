"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      suppressHydrationWarning
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-3 py-1 rounded border"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
