"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className={
        "dark:bg-gray-800 dark:border-white duration-500 border border-black p-1 rounded-full flex"
      }
      onClick={handleChangeTheme}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0" />
      <MoonIcon className="h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100 text-white" />
    </button>
  );
};

export default Theme;
