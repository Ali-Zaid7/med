// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-sm transition-transform hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-700" />}
    </button>
  );
}
