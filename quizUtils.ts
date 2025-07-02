import { Question, questionBank } from '../data/questions';

export const getRandomQuestions = (category: string, count: number): Question[] => {
  let filteredQuestions = questionBank;
  
  if (category !== 'All') {
    filteredQuestions = questionBank.filter(q => q.category === category);
  }

  // Shuffle the array using Fisher-Yates algorithm
  const shuffled = [...filteredQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const calculateScore = (answers: (number | null)[], questions: Question[]): number => {
  return answers.reduce((score, answer, index) => {
    if (answer === questions[index].correctAnswer) {
      return score + 1;
    }
    return score;
  }, 0);
};