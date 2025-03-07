
import React from "react";
import Navbar from "../components/Navbar";
import CategorySelector from "../components/CategorySelector";
import Flashcard from "../components/Flashcard";
import FlashcardControls from "../components/FlashcardControls";
import ProgressBar from "../components/ProgressBar";
import CardCountSelector from "../components/CardCountSelector";
import { FlashcardProvider, useFlashcards } from "../context/FlashcardContext";
import { Mail } from "lucide-react";

const FlashcardSection: React.FC = () => {
  const { 
    currentCategory,
    filteredFlashcards,
    hasStartedReview
  } = useFlashcards();
  
  if (!currentCategory) {
    return null;
  }
  
  if (filteredFlashcards.length === 0) {
    return (
      <div className="text-center p-8">
        <h3 className="text-xl font-medium">No flashcards available</h3>
        <p className="text-muted-foreground mt-2">Try selecting a different category or add new flashcards</p>
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in">
      <CardCountSelector />
      
      {hasStartedReview && (
        <>
          <ProgressBar />
          <Flashcard />
          <FlashcardControls />
        </>
      )}
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
            <div className="flex items-center justify-center gap-2 mt-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a 
                href="mailto:nirajkumar4598@gmail.com" 
                className="text-sm text-primary hover:underline transition-all"
              >
                nirajkumar4598@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </FlashcardProvider>
  );
};

export default Index;
