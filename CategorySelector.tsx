import React from 'react';
import { categories } from '../data/questions';
import { BookOpen, Atom, Clock, Globe } from 'lucide-react';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  onStartQuiz: () => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onCategorySelect,
  onStartQuiz
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'General Knowledge':
        return <BookOpen className="w-8 h-8" />;
      case 'Science':
        return <Atom className="w-8 h-8" />;
      case 'History':
        return <Clock className="w-8 h-8" />;
      case 'Geography':
        return <Globe className="w-8 h-8" />;
      default:
        return <BookOpen className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'General Knowledge':
        return 'from-blue-500 to-blue-600';
      case 'Science':
        return 'from-green-500 to-green-600';
      case 'History':
        return 'from-purple-500 to-purple-600';
      case 'Geography':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🧠 Flashcard Quiz
        </h1>
        <p className="text-xl text-gray-600">
          Test your knowledge across different categories
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Choose a Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-300'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryColor(category)} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {getCategoryIcon(category)}
                </div>
                <span className="font-semibold text-gray-800">{category}</span>
                {category === 'All' && (
                  <span className="text-sm text-gray-500 mt-1">Mix of all topics</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onStartQuiz}
          disabled={!selectedCategory}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          Start Quiz (10 Questions)
        </button>
      </div>
    </div>
  );
};