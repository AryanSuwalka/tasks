import React from 'react';
import { FaRobot, FaBook, FaChartLine } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-transform transform-gpu ease-out duration-1000">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 transition-transform transform-gpu ease-in-out duration-500">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-blue-900 ease-in-out duration-300">
            <FaRobot className="text-blue-500 dark:text-blue-400 mb-4 transition-transform transform-gpu hover:animate-pulse" size={48} />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-transform transform-gpu hover:text-blue-600 dark:hover:text-blue-400 ease-in-out duration-300">
              AI-Powered Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-opacity opacity-75 hover:opacity-100 ease-in-out duration-300">
              Get deep insights into any text with our AI-powered tools.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-blue-900 ease-in-out duration-300">
            <FaBook className="text-blue-500 dark:text-blue-400 mb-4 transition-transform transform-gpu hover:animate-pulse" size={48} />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-transform transform-gpu hover:text-blue-600 dark:hover:text-blue-400 ease-in-out duration-300">
              Advanced Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-opacity opacity-75 hover:opacity-100 ease-in-out duration-300">
              Analyze books and articles with advanced metrics and data visualizations.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-blue-900 ease-in-out duration-300">
            <FaChartLine className="text-blue-500 dark:text-blue-400 mb-4 transition-transform transform-gpu hover:animate-pulse" size={48} />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-transform transform-gpu hover:text-blue-600 dark:hover:text-blue-400 ease-in-out duration-300">
              Progress Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-opacity opacity-75 hover:opacity-100 ease-in-out duration-300">
              Track your reading progress and achieve your goals with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
