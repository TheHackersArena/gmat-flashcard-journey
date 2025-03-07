
import React from "react";
import { useFlashcards } from "../context/FlashcardContext";
import { ChevronRight } from "lucide-react";
import { Category } from "../data/flashcards";
import { icons } from "lucide-react";

// Dynamic icon component
interface LucideIconProps {
  name: string;
  className?: string;
}

const LucideIcon: React.FC<LucideIconProps> = ({ name, className }) => {
  const IconComponent = icons[name as keyof typeof icons];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} />;
};

const CategorySelector: React.FC = () => {
  const { categories, currentCategory, setCurrentCategory, setCurrentCardIndex, setIsFlipped } = useFlashcards();

  const handleCategorySelect = (category: Category) => {
    if (currentCategory?.id === category.id) {
      setCurrentCategory(null);
    } else {
      setCurrentCategory(category);
      setCurrentCardIndex(0); // Reset to first card when changing category
      setIsFlipped(false); // Ensure card is showing front side
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-medium mb-6 text-center">Choose a Topic</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => {
          const isSelected = currentCategory?.id === category.id;
          return (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category)}
              className={`relative overflow-hidden group rounded-xl p-6 h-40 text-left card-lift elegant-transition ${
                isSelected 
                  ? "ring-2 ring-primary bg-gradient-to-br " + category.color
                  : "bg-card hover:bg-secondary/50"
              }`}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-2">
                  <LucideIcon 
                    name={category.icon} 
                    className={`h-8 w-8 ${
                      isSelected 
                        ? "text-white" 
                        : "text-primary"
                    }`} 
                  />
                  <ChevronRight className={`h-5 w-5 transform transition-transform ${
                    isSelected 
                      ? "rotate-0 text-white" 
                      : "-translate-x-2 text-muted-foreground group-hover:translate-x-0"
                  }`} />
                </div>
                
                <div>
                  <h3 className={`font-medium text-lg mb-1 ${
                    isSelected ? "text-white" : "text-foreground"
                  }`}>{category.name}</h3>
                  <p className={`text-sm line-clamp-2 ${
                    isSelected 
                      ? "text-white/80" 
                      : "text-muted-foreground"
                  }`}>
                    {category.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
