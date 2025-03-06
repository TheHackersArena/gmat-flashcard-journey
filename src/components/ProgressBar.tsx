
import React from "react";
import { useFlashcards } from "../context/FlashcardContext";

const ProgressBar: React.FC = () => {
  const { progress, currentCardIndex, filteredFlashcards } = useFlashcards();
  
  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-muted-foreground">
          Card {currentCardIndex + 1} of {filteredFlashcards.length}
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
