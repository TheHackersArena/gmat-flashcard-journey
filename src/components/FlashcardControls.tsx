
import React from "react";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { useFlashcards } from "../context/FlashcardContext";

const FlashcardControls: React.FC = () => {
  const { 
    goToPrevCard, 
    goToNextCard, 
    shuffleCards,
    currentCardIndex,
    filteredFlashcards
  } = useFlashcards();
  
  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === filteredFlashcards.length - 1;
  
  return (
    <div className="flex items-center justify-center gap-4 mt-8 mb-4">
      <button
        onClick={goToPrevCard}
        disabled={isFirstCard}
        className={`p-3 rounded-full elegant-transition button-press ${
          isFirstCard 
            ? "bg-secondary/30 text-muted-foreground cursor-not-allowed" 
            : "bg-secondary/50 hover:bg-secondary text-foreground"
        }`}
        aria-label="Previous card"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={shuffleCards}
        className="p-3 rounded-full elegant-transition button-press bg-primary/10 hover:bg-primary/20 text-primary"
        aria-label="Shuffle cards"
      >
        <Shuffle className="h-5 w-5" />
      </button>
      
      <button
        onClick={goToNextCard}
        disabled={isLastCard}
        className={`p-3 rounded-full elegant-transition button-press ${
          isLastCard 
            ? "bg-secondary/30 text-muted-foreground cursor-not-allowed" 
            : "bg-secondary/50 hover:bg-secondary text-foreground"
        }`}
        aria-label="Next card"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FlashcardControls;
