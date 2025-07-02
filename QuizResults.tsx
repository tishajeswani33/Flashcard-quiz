import React from 'react';
import { Trophy, RotateCcw, Target, Clock } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  timeElapsed: number;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  onRestart,
  timeElapsed
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  const getScoreMessage = () => {
    if (percentage >= 90) return { message: "Outstanding!", color: "text-green-600", bgColor: "bg-green-50" };
    if (percentage >= 80) return { message: "Excellent!", color: "text-blue-600", bgColor: "bg-blue-50" };
    if (percentage >= 70) return { message: "Good Job!", color: "text-yellow-600", bgColor: "bg-yellow-50" };
    if (percentage >= 60) return { message: "Not Bad!", color: "text-orange-600", bgColor: "bg-orange-50" };
    return { message: "Keep Practicing!", color: "text-red-600", bgColor: "bg-red-50" };
  };

  const scoreInfo = getScoreMessage();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-center transform transition-all duration-500">
      <div className="mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Trophy className="w-12 h-12 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
        <div className={`inline-block px-6 py-3 rounded-full ${scoreInfo.bgColor} ${scoreInfo.color} font-semibold text-lg mb-6`}>
          {scoreInfo.message}
        </div>
      </div>

      {/* Score Circle */}
      <div className="relative mb-8">
        <div className="w-48 h-48 mx-auto relative">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${percentage * 2.51} 251`}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800">{percentage}%</div>
              <div className="text-sm text-gray-600">Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center justify-center mb-2">
            <Target className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-600">Correct Answers</span>
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {score} / {totalQuestions}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-6 h-6 text-green-600 mr-2" />
            <span className="text-sm font-medium text-gray-600">Time Taken</span>
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Restart Button */}
      <button
        onClick={onRestart}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
      >
        <RotateCcw className="w-5 h-5 mr-2" />
        Take Another Quiz
      </button>
    </div>
  );
};