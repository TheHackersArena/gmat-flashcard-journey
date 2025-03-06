
import React from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useFlashcards } from "../context/FlashcardContext";

interface BookmarkButtonProps {
  flashcardId: string;
  isBookmarked: boolean;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ flashcardId, isBookmarked }) => {
  const { toggleBookmark } = useFlashcards();
  
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation(); // Prevent card flip when clicking bookmark
        toggleBookmark(flashcardId);
      }}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      className="absolute top-4 right-4 p-1.5 rounded-full elegant-transition button-press bg-secondary/50 hover:bg-secondary text-foreground"
    >
      {isBookmarked ? (
        <BookmarkCheck className="h-5 w-5 text-primary animate-scale-in" />
      ) : (
        <Bookmark className="h-5 w-5" />
      )}
    </button>
  );
};

export default BookmarkButton;
