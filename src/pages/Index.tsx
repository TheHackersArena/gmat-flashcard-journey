
import React from "react";
import Navbar from "../components/Navbar";
import CategorySelector from "../components/CategorySelector";
import Flashcard from "../components/Flashcard";
import FlashcardControls from "../components/FlashcardControls";
import ProgressBar from "../components/ProgressBar";
import { FlashcardProvider, useFlashcards } from "../context/FlashcardContext";

const FlashcardSection: React.FC = () => {
  const { currentCategory, filteredFlashcards } = useFlashcards();
  
  if (!currentCategory) {
    return null;
  }
  
  if (filteredFlashcards.length === 0) {
    return (
      <div className="text-center p-8">
        <h3 className="text-xl font-medium">No flashcards available</h3>
        <p className="text-muted-foreground mt-2">Try selecting a different category</p>
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in">
      <ProgressBar />
      <Flashcard />
      <FlashcardControls />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <FlashcardProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <CategorySelector />
          <FlashcardSection />
        </main>
        <footer className="py-6 border-t">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              GMAT Flashcard App — Study smarter, not harder
            </p>
          </div>
        </footer>
      </div>
    </FlashcardProvider>
  );
};

export default Index;
