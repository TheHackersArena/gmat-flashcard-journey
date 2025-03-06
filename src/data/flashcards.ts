
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

export const categories: Category[] = [
  {
    id: "arithmetic",
    name: "Arithmetic",
    icon: "calculator",
    description: "Fractions, percentages, ratios, and other number properties",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "algebra",
    name: "Algebra",
    icon: "sigma",
    description: "Equations, inequalities, exponents, and functions",
    color: "from-purple-500 to-indigo-400"
  },
  {
    id: "geometry",
    name: "Geometry",
    icon: "triangle",
    description: "Triangles, circles, coordinate geometry, and spatial reasoning",
    color: "from-green-500 to-emerald-400"
  },
  {
    id: "word-problems",
    name: "Word Problems",
    icon: "book-open",
    description: "Rate, work, probability, and quantitative reasoning",
    color: "from-amber-500 to-yellow-400"
  },
  {
    id: "data-sufficiency",
    name: "Data Sufficiency",
    icon: "bar-chart",
    description: "Specialized tips and strategies for data sufficiency questions",
    color: "from-rose-500 to-pink-400"
  }
];

export const flashcards: Flashcard[] = [
  // Arithmetic
  {
    id: "arith-1",
    categoryId: "arithmetic",
    front: "What is the rule for adding fractions with different denominators?",
    back: "Find the least common multiple (LCM) of the denominators, convert each fraction to an equivalent fraction with the LCM as denominator, then add the numerators.\n\nExample: 1/2 + 1/3\nLCM of 2 and 3 is 6\n1/2 = 3/6 and 1/3 = 2/6\n3/6 + 2/6 = 5/6",
    isBookmarked: false
  },
  {
    id: "arith-2",
    categoryId: "arithmetic",
    front: "How do you calculate percentage change?",
    back: "Percentage change = ((New value - Original value) / Original value) × 100%\n\nIf the result is positive, it's a percentage increase.\nIf the result is negative, it's a percentage decrease.",
    isBookmarked: false
  },
  {
    id: "arith-3",
    categoryId: "arithmetic",
    front: "What is the difference between permutation and combination?",
    back: "Permutation: Order matters. Formula: nPr = n! / (n-r)!\n\nCombination: Order doesn't matter. Formula: nCr = n! / (r! × (n-r)!)\n\nWhere n is the total number of items and r is the number of items being selected.",
    isBookmarked: true
  },
  
  // Algebra
  {
    id: "alg-1",
    categoryId: "algebra",
    front: "How do you solve a quadratic equation?",
    back: "For ax² + bx + c = 0:\n\n1. Factoring: Find numbers that multiply to ac and add to b\n2. Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a\n3. Completing the square: Rewrite as (x + p)² = q",
    isBookmarked: false
  },
  {
    id: "alg-2",
    categoryId: "algebra",
    front: "What are the rules for exponents?",
    back: "• x^a × x^b = x^(a+b)\n• x^a ÷ x^b = x^(a-b)\n• (x^a)^b = x^(a×b)\n• x^0 = 1 (if x ≠ 0)\n• x^(-a) = 1/x^a\n• (xy)^a = x^a × y^a\n• (x/y)^a = x^a / y^a",
    isBookmarked: true
  },
  {
    id: "alg-3",
    categoryId: "algebra",
    front: "How do you solve a system of linear equations?",
    back: "Methods:\n1. Substitution: Solve for one variable in terms of others, then substitute\n2. Elimination: Add or subtract equations to eliminate a variable\n3. Matrix methods: Use Gaussian elimination or Cramer's rule\n4. Graphing: Find the intersection point of the lines",
    isBookmarked: false
  },
  
  // Geometry
  {
    id: "geo-1",
    categoryId: "geometry",
    front: "What is the Pythagorean theorem?",
    back: "In a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides.\n\na² + b² = c²\n\nwhere c is the hypotenuse (side opposite the right angle) and a and b are the other two sides.",
    isBookmarked: false
  },
  {
    id: "geo-2",
    categoryId: "geometry",
    front: "What are the area formulas for common shapes?",
    back: "• Rectangle: A = length × width\n• Square: A = side²\n• Triangle: A = (1/2) × base × height\n• Circle: A = πr²\n• Trapezoid: A = (1/2) × (a + b) × h, where a and b are the parallel sides\n• Parallelogram: A = base × height",
    isBookmarked: false
  },
  {
    id: "geo-3",
    categoryId: "geometry",
    front: "What are the properties of similar triangles?",
    back: "• Corresponding angles are equal\n• Corresponding sides are proportional\n• The ratio of areas is equal to the square of the ratio of corresponding sides\n• The ratio of perimeters is equal to the ratio of corresponding sides",
    isBookmarked: false
  },
  
  // Word Problems
  {
    id: "word-1",
    categoryId: "word-problems",
    front: "How do you solve work problems?",
    back: "If A can complete a task in a time and B can complete the same task in b time, then working together they can complete the task in time t, where:\n\n1/t = 1/a + 1/b\n\nExample: If A takes 6 hours and B takes 3 hours, together they take 1/(1/6 + 1/3) = 1/(1/6 + 2/6) = 1/(3/6) = 6/3 = 2 hours",
    isBookmarked: false
  },
  {
    id: "word-2",
    categoryId: "word-problems",
    front: "How do you solve mixture problems?",
    back: "For mixtures, use the formula:\n(Amount of substance in mixture 1) + (Amount of substance in mixture 2) = (Amount of substance in final mixture)\n\nExample: If 10L of 30% alcohol is mixed with 5L of 60% alcohol, the final percentage is:\n(10 × 0.3 + 5 × 0.6) / (10 + 5) = (3 + 3) / 15 = 6/15 = 40%",
    isBookmarked: true
  },
  {
    id: "word-3",
    categoryId: "word-problems",
    front: "How do you solve rate problems with distance?",
    back: "Use the formula: Distance = Rate × Time or rearranged as Time = Distance / Rate\n\nFor problems involving two objects moving toward or away from each other, the total distance is covered at a rate equal to the sum of the individual rates.",
    isBookmarked: false
  },
  
  // Data Sufficiency
  {
    id: "ds-1",
    categoryId: "data-sufficiency",
    front: "What are the 5 answer choices in GMAT Data Sufficiency questions?",
    back: "A: Statement (1) ALONE is sufficient, but statement (2) alone is not.\nB: Statement (2) ALONE is sufficient, but statement (1) alone is not.\nC: BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.\nD: EACH statement ALONE is sufficient.\nE: Statements (1) and (2) TOGETHER are NOT sufficient.",
    isBookmarked: true
  },
  {
    id: "ds-2",
    categoryId: "data-sufficiency",
    front: "What is the best strategy for approaching Data Sufficiency questions?",
    back: "1. Understand what the question is asking (the target)\n2. Analyze statement (1) alone\n3. Analyze statement (2) alone\n4. If necessary, analyze both statements together\n5. Select the appropriate answer choice based on your analysis\n\nDon't try to solve completely - just determine if you COULD solve with the given information.",
    isBookmarked: false
  },
  {
    id: "ds-3",
    categoryId: "data-sufficiency",
    front: "What are common traps in Data Sufficiency questions?",
    back: "• Assuming more than what's stated\n• Overlooking constraints or conditions\n• Focusing on getting a specific answer rather than determining sufficiency\n• Not considering all possible scenarios\n• Combining statements before analyzing each independently\n• Making computational errors in your analysis",
    isBookmarked: false
  }
];
