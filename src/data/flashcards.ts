export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
};

export type Flashcard = {
  id: string;
  categoryId: string;
  front: string;
  back: string;
  isBookmarked: boolean;
};

// Types are now defined here, but actual data is in JSON files
// categories.json and flashcards.json
