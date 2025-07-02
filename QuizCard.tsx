import React from 'react';
import { Question } from '../data/questions';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  onNext,
  questionNumber,
  totalQuestions
}) => {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto transform transition-all duration-500 hover:shadow-2xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {question.category}
          </span>
          <span className="text-sm text-gray-500">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => {
          let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-102 ";
          
          if (showResult) {
            if (index === question.correctAnswer) {
              buttonClass += "bg-green-50 border-green-500 text-green-800";
            } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
              buttonClass += "bg-red-50 border-red-500 text-red-800";
            } else {
              buttonClass += "bg-gray-50 border-gray-200 text-gray-500";
            }
          } else {
            if (selectedAnswer === index) {
              buttonClass += "bg-blue-50 border-blue-500 text-blue-800 shadow-md";
            } else {
              buttonClass += "bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && onAnswerSelect(index)}
              disabled={showResult}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {showResult && (
                  <div className="flex items-center">
                    {index === question.correctAnswer ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : index === selectedAnswer && selectedAnswer !== question.correctAnswer ? (
                      <XCircle className="w-5 h-5 text-red-600" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Result and Explanation */}
      {showResult && (
        <div className="mb-6">
          <div className={`p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center mb-2">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 mr-2" />
              )}
              <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </span>
            </div>
            {question.explanation && (
              <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {question.explanation}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Next Button */}
      {showResult && (
        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
        >
          Next Question
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      )}
    </div>
  );
};