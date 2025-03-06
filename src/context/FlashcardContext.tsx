
import React, { createContext, useState, useEffect, useContext } from "react";
import { Category, Flashcard } from "../data/flashcards";
import categoriesData from "../data/categories.json";
import flashcardsData from "../data/flashcards.json";

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
  selectedCardCount: number;
  setSelectedCardCount: (count: number) => void;
  hasStartedReview: boolean;
  startReview: () => void;
  resetReview: () => void;
};

const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

export const FlashcardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cast imported JSON data to the correct types
  const categories = categoriesData as Category[];
  const [modifiedFlashcards, setModifiedFlashcards] = useState<Flashcard[]>(flashcardsData as Flashcard[]);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCardCount, setSelectedCardCount] = useState(10);
  const [hasStartedReview, setHasStartedReview] = useState(false);

  const allCategoryFlashcards = currentCategory
    ? modifiedFlashcards.filter(card => card.categoryId === currentCategory.id)
    : modifiedFlashcards;

  const filteredFlashcards = hasStartedReview 
    ? allCategoryFlashcards.slice(0, selectedCardCount)
    : allCategoryFlashcards;

  const progress = 
    filteredFlashcards.length > 0 && hasStartedReview
      ? ((currentCardIndex + 1) / filteredFlashcards.length) * 100 
      : 0;

  useEffect(() => {
    if (allCategoryFlashcards.length > 0) {
      const availableCounts = [5, 10, 20, 50, 100].filter(count => count <= allCategoryFlashcards.length);
      const defaultCount = availableCounts.length > 0 ? availableCounts[0] : Math.min(allCategoryFlashcards.length, 5);
      setSelectedCardCount(defaultCount);
    }
  }, [currentCategory, allCategoryFlashcards.length]);

  const startReview = () => {
    setHasStartedReview(true);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const resetReview = () => {
    setHasStartedReview(false);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

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

  const toggleBookmark = (id: string) => {
    const updatedFlashcards = modifiedFlashcards.map(card => 
      card.id === id ? { ...card, isBookmarked: !card.isBookmarked } : card
    );
    setModifiedFlashcards(updatedFlashcards);
  };

  const shuffleCards = () => {
    const shuffled = [...filteredFlashcards].sort(() => Math.random() - 0.5);
    setModifiedFlashcards(prevCards => {
      const otherCards = prevCards.filter(card => 
        !filteredFlashcards.some(filtered => filtered.id === card.id)
      );
      return [...otherCards, ...shuffled];
    });
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  useEffect(() => {
    setHasStartedReview(false);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [currentCategory]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    toggleDarkMode,
    selectedCardCount,
    setSelectedCardCount,
    hasStartedReview,
    startReview,
    resetReview
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
