
import React, { createContext, useState, useEffect, useContext } from "react";
import { categories, flashcards, Category, Flashcard } from "../data/flashcards";

type FlashcardContextType = {
  categories: Category[];
  flashcards: Flashcard[];
  currentCategory: Category | null;
  setCurrentCategory: (category: Category | null) => void;
  filteredFlashcards: Flashcard[];
  currentCardIndex: number;
  setCurrentCardIndex: (index: number) => void;
  isFlipped: boolean;
  setIsFlipped: (flipped: boolean) => void;
  goToNextCard: () => void;
  goToPrevCard: () => void;
  toggleBookmark: (id: string) => void;
  shuffleCards: () => void;
  progress: number;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

export const FlashcardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [modifiedFlashcards, setModifiedFlashcards] = useState<Flashcard[]>(flashcards);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get filtered flashcards based on selected category
  const filteredFlashcards = currentCategory
    ? modifiedFlashcards.filter(card => card.categoryId === currentCategory.id)
    : modifiedFlashcards;

  // Calculate progress
  const progress = 
    filteredFlashcards.length > 0 
      ? ((currentCardIndex + 1) / filteredFlashcards.length) * 100 
      : 0;

  // Navigation functions
  const goToNextCard = () => {
    if (currentCardIndex < filteredFlashcards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex + 1);
      }, 200);
    }
  };

  const goToPrevCard = () => {
    if (currentCardIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex - 1);
      }, 200);
    }
  };

  // Toggle bookmark
  const toggleBookmark = (id: string) => {
    const updatedFlashcards = modifiedFlashcards.map(card => 
      card.id === id ? { ...card, isBookmarked: !card.isBookmarked } : card
    );
    setModifiedFlashcards(updatedFlashcards);
  };

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...filteredFlashcards].sort(() => Math.random() - 0.5);
    setModifiedFlashcards(prevCards => {
      // Only shuffle the current category cards
      const otherCards = prevCards.filter(card => 
        !filteredFlashcards.some(filtered => filtered.id === card.id)
      );
      return [...otherCards, ...shuffled];
    });
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const value = {
    categories,
    flashcards: modifiedFlashcards,
    currentCategory,
    setCurrentCategory,
    filteredFlashcards,
    currentCardIndex,
    setCurrentCardIndex,
    isFlipped,
    setIsFlipped,
    goToNextCard,
    goToPrevCard,
    toggleBookmark,
    shuffleCards,
    progress,
    isDarkMode,
    toggleDarkMode
  };

  return (
    <FlashcardContext.Provider value={value}>
      {children}
    </FlashcardContext.Provider>
  );
};

export const useFlashcards = (): FlashcardContextType => {
  const context = useContext(FlashcardContext);
  if (context === undefined) {
    throw new Error("useFlashcards must be used within a FlashcardProvider");
  }
  return context;
};
