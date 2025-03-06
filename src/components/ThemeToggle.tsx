
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useFlashcards } from "../context/FlashcardContext";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useFlashcards();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative p-2 rounded-full elegant-transition button-press bg-secondary/50 hover:bg-secondary text-foreground"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-opacity ${isDarkMode ? 'opacity-0 absolute' : 'opacity-100'}`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-0 absolute'}`} />
    </button>
  );
};

export default ThemeToggle;
