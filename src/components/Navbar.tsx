
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { GraduationCap } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-8 py-4 border-b backdrop-blur-lg bg-background/80 supports-backdrop-blur:bg-background/60 z-10 transition-all duration-200 ease-in-out">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-medium tracking-tight">GMAT Flashcards</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
