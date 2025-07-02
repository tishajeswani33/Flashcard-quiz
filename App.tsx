import React, { useState, useEffect } from 'react';
import { CategorySelector } from './components/CategorySelector';
import { QuizCard } from './components/QuizCard';
import { QuizResults } from './components/QuizResults';
import { Question } from './data/questions';
import { getRandomQuestions, calculateScore } from './utils/quizUtils';
import { useTimer } from './hooks/useTimer';

type GameState = 'category-selection' | 'quiz' | 'results';

function App() {
  const [gameState, setGameState] = useState<GameState>('category-selection');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  
  const { seconds, reset: resetTimer } = useTimer(gameState === 'quiz');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleStartQuiz = () => {
    const quizQuestions = getRandomQuestions(selectedCategory, 10);
    setQuestions(quizQuestions);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    resetTimer();
    setGameState('quiz');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
    
    // Show result after a short delay
    setTimeout(() => {
      setShowResult(true);
    }, 300);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      const finalScore = calculateScore(answers, questions);
      setScore(finalScore);
      setGameState('results');
    }
  };

  const handleRestart = () => {
    setGameState('category-selection');
    setSelectedCategory('');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    resetTimer();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {gameState === 'category-selection' && (
          <CategorySelector
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {gameState === 'quiz' && questions.length > 0 && (
          <div className="space-y-6">
            {/* Timer */}
            <div className="text-center">
              <div className="inline-block bg-white rounded-full px-4 py-2 shadow-md">
                <span className="text-sm font-medium text-gray-600">
                  Time: {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>

            <QuizCard
              question={questions[currentQuestionIndex]}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNext}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          </div>
        )}

        {gameState === 'results' && (
          <QuizResults
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
            timeElapsed={seconds}
          />
        )}
      </div>
    </div>
  );
}

export default App;