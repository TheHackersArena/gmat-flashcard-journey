
import React from "react";
import { useFlashcards } from "../context/FlashcardContext";
import BookmarkButton from "./BookmarkButton";
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

const Flashcard: React.FC = () => {
  const { 
    filteredFlashcards, 
    currentCardIndex, 
    isFlipped, 
    setIsFlipped,
    currentCategory
  } = useFlashcards();
  
  if (filteredFlashcards.length === 0 || !currentCategory) {
    return null;
  }
  
  const currentCard = filteredFlashcards[currentCardIndex];
  
  if (!currentCard) {
    return null;
  }

  const getCategoryById = (id: string): Category | undefined => {
    const { categories } = useFlashcards();
    return categories.find(category => category.id === id);
  };
  
  const cardCategory = getCategoryById(currentCard.categoryId);
  
  return (
    <div 
      className="preserve-3d w-full max-w-2xl mx-auto my-8 cursor-pointer"
      style={{ height: "340px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative h-full w-full transition-all duration-500 transform-gpu preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl p-8 shadow-xl bg-card border elegant-transition">
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              {cardCategory && (
                <>
                  <div className={`p-1.5 rounded-md bg-gradient-to-br ${cardCategory.color} text-white`}>
                    <LucideIcon name={cardCategory.icon} className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-muted-foreground">{cardCategory.name}</span>
                </>
              )}
            </div>
            
            <div className="flex-grow flex items-center justify-center">
              <h3 className="text-2xl font-medium text-center leading-relaxed">
                {currentCard.front}
              </h3>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">Click to see answer</p>
            </div>
            
            <BookmarkButton 
              flashcardId={currentCard.id} 
              isBookmarked={currentCard.isBookmarked} 
            />
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl p-8 shadow-xl bg-card border rotate-y-180 elegant-transition">
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              {cardCategory && (
                <>
                  <div className={`p-1.5 rounded-md bg-gradient-to-br ${cardCategory.color} text-white`}>
                    <LucideIcon name={cardCategory.icon} className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-muted-foreground">{cardCategory.name}</span>
                </>
              )}
            </div>
            
            <div className="flex-grow overflow-y-auto">
              <div className="prose max-w-none dark:prose-invert">
                {currentCard.back.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">Click to see question</p>
            </div>
            
            <BookmarkButton 
              flashcardId={currentCard.id} 
              isBookmarked={currentCard.isBookmarked} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
