export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const questionBank: Question[] = [
  // General Knowledge
  {
    id: 1,
    category: "General Knowledge",
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    explanation: "Paris has been the capital of France since 1792."
  },
  {
    id: 2,
    category: "General Knowledge",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars appears red due to iron oxide (rust) on its surface."
  },
  {
    id: 3,
    category: "General Knowledge",
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    explanation: "The Pacific Ocean covers more than 30% of Earth's surface."
  },
  {
    id: 4,
    category: "General Knowledge",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    explanation: "William Shakespeare wrote this famous tragedy around 1595."
  },
  {
    id: 5,
    category: "General Knowledge",
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    explanation: "Au comes from the Latin word 'aurum' meaning gold."
  },

  // Science
  {
    id: 6,
    category: "Science",
    question: "What is the speed of light in vacuum?",
    options: ["299,792,458 m/s", "300,000,000 m/s", "186,000 m/s", "150,000,000 m/s"],
    correctAnswer: 0,
    explanation: "The speed of light in vacuum is exactly 299,792,458 meters per second."
  },
  {
    id: 7,
    category: "Science",
    question: "What is the hardest natural substance on Earth?",
    options: ["Quartz", "Steel", "Diamond", "Titanium"],
    correctAnswer: 2,
    explanation: "Diamond is the hardest naturally occurring substance known."
  },
  {
    id: 8,
    category: "Science",
    question: "How many bones are in an adult human body?",
    options: ["206", "208", "210", "212"],
    correctAnswer: 0,
    explanation: "An adult human skeleton has 206 bones."
  },
  {
    id: 9,
    category: "Science",
    question: "What gas makes up about 78% of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correctAnswer: 2,
    explanation: "Nitrogen makes up approximately 78% of Earth's atmosphere."
  },
  {
    id: 10,
    category: "Science",
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Vacuole"],
    correctAnswer: 1,
    explanation: "Mitochondria produce ATP, the energy currency of cells."
  },

  // History
  {
    id: 11,
    category: "History",
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    explanation: "World War II ended in 1945 with the surrender of Japan."
  },
  {
    id: 12,
    category: "History",
    question: "Who was the first person to walk on the moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
    correctAnswer: 1,
    explanation: "Neil Armstrong was the first person to walk on the moon on July 20, 1969."
  },
  {
    id: 13,
    category: "History",
    question: "Which ancient wonder of the world was located in Alexandria?",
    options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"],
    correctAnswer: 2,
    explanation: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World."
  },
  {
    id: 14,
    category: "History",
    question: "What year did the Berlin Wall fall?",
    options: ["1987", "1988", "1989", "1990"],
    correctAnswer: 2,
    explanation: "The Berlin Wall fell on November 9, 1989."
  },
  {
    id: 15,
    category: "History",
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "George Washington"],
    correctAnswer: 3,
    explanation: "George Washington served as the first President from 1789 to 1797."
  },

  // Geography
  {
    id: 16,
    category: "Geography",
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
    correctAnswer: 1,
    explanation: "The Nile River is approximately 6,650 kilometers long."
  },
  {
    id: 17,
    category: "Geography",
    question: "Which country has the most natural lakes?",
    options: ["Russia", "Canada", "Finland", "Sweden"],
    correctAnswer: 1,
    explanation: "Canada has more lakes than the rest of the world combined."
  },
  {
    id: 18,
    category: "Geography",
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    explanation: "Vatican City is the smallest country with an area of 0.17 square miles."
  },
  {
    id: 19,
    category: "Geography",
    question: "Mount Everest is located in which mountain range?",
    options: ["Andes", "Rocky Mountains", "Alps", "Himalayas"],
    correctAnswer: 3,
    explanation: "Mount Everest is part of the Himalayan mountain range."
  },
  {
    id: 20,
    category: "Geography",
    question: "Which desert is the largest in the world?",
    options: ["Sahara", "Gobi", "Antarctica", "Arabian"],
    correctAnswer: 2,
    explanation: "Antarctica is technically the largest desert, being a cold desert."
  }
];

export const categories = ["All", "General Knowledge", "Science", "History", "Geography"];