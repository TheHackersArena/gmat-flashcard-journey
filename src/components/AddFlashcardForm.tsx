import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { useFlashcards } from "../context/FlashcardContext";

const AddFlashcardForm: React.FC = () => {
  const { currentCategory, categories } = useFlashcards();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Adding flashcards through the UI is disabled. Please modify the data files directly.");
    
    // Reset form
    setFront("");
    setBack("");
    setCategoryId(currentCategory?.id || "");
    setIsFormOpen(false);
  };
  
  if (!isFormOpen) {
    return (
      <div className="w-full max-w-2xl mx-auto my-6 px-4">
        <button
          onClick={() => setIsFormOpen(true)}
          className="w-full py-3 rounded-xl border border-dashed border-primary/30 text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Flashcard</span>
        </button>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto my-6 px-4 animate-fade-in">
      <div className="bg-card rounded-xl p-6 border shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Add New Flashcard</h3>
          <button 
            onClick={() => setIsFormOpen(false)}
            className="p-1 rounded-md hover:bg-secondary/80 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={categoryId || currentCategory?.id || ""}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full p-2 rounded-md border bg-background"
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="front">
              Question (Front)
            </label>
            <textarea
              id="front"
              value={front}
              onChange={(e) => setFront(e.target.value)}
              className="w-full p-2 rounded-md border bg-background min-h-[100px]"
              placeholder="Enter your question or concept"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="back">
              Answer (Back)
            </label>
            <textarea
              id="back"
              value={back}
              onChange={(e) => setBack(e.target.value)}
              className="w-full p-2 rounded-md border bg-background min-h-[150px]"
              placeholder="Enter the explanation or answer"
              required
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="px-4 py-2 rounded-md bg-secondary text-foreground mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            >
              Add Flashcard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlashcardForm;
