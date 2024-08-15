import React from 'react';



const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "BookAI has completely changed the way I read and analyze texts. The AI tools are simply amazing!"
            </p>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">- Jane Doe</h3>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "I love how easy it is to track my reading progress and stay motivated. Highly recommended!"
            </p>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">- John Smith</h3>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "The advanced analytics are a game-changer for any avid reader. I can't imagine reading without it now."
            </p>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">- Sarah Johnson</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
