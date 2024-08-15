import React from 'react';
import { FaRobot, FaBook, FaChartLine } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaRobot className="text-blue-500 dark:text-blue-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get deep insights into any text with our AI-powered tools.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaBook className="text-blue-500 dark:text-blue-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Advanced Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Analyze books and articles with advanced metrics and data visualizations.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <FaChartLine className="text-blue-500 dark:text-blue-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Progress Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track your reading progress and achieve your goals with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
