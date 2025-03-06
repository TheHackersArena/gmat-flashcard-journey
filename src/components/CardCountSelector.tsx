
import React from "react";
import { useFlashcards } from "../context/FlashcardContext";
import { Sliders, Play, RotateCcw } from "lucide-react";

const CardCountSelector: React.FC = () => {
  const { 
    selectedCardCount,
    setSelectedCardCount,
    startReview,
    resetReview,
    hasStartedReview,
    filteredFlashcards,
    currentCategory
  } = useFlashcards();

  // Predefined card count options
  const countOptions = [5, 10, 20, 50, 100];
  
  // Calculate the maximum cards available
  const totalAvailableCards = filteredFlashcards.length;
  const maxAllowed = Math.min(totalAvailableCards, 200);
  
  if (!currentCategory) {
    return null;
  }
  
  if (hasStartedReview) {
    return (
      <div className="w-full max-w-xl mx-auto my-6 px-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Reviewing <span className="font-medium text-foreground">{selectedCardCount}</span> cards
          </p>
          <button
            onClick={resetReview}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-secondary text-foreground text-sm hover:bg-secondary/80 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto my-6 px-4 animate-fade-in">
      <div className="bg-card rounded-xl p-6 border shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Sliders className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Select number of cards to review</h3>
        </div>
        
        <div className="grid grid-cols-5 gap-2 mb-4">
          {countOptions.map(count => (
            <button
              key={count}
              onClick={() => setSelectedCardCount(Math.min(count, maxAllowed))}
              className={`py-2 rounded-md text-sm font-medium transition-all ${
                selectedCardCount === count
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm text-muted-foreground">Cards to review:</span>
              <span className="font-medium">{selectedCardCount}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {totalAvailableCards} cards available in this category
            </div>
          </div>
          
          <button
            onClick={startReview}
            disabled={totalAvailableCards === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="h-4 w-4" />
            Start Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCountSelector;
