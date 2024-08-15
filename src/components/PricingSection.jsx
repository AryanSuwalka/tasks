import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-10">Our Pricing</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Pricing Card */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Basic Plan</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">$19.99/month</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 2</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 3</li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
          {/* Repeat for more pricing cards */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Standard Plan</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">$49.99/month</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 2</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 3</li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Premium Plan</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">$99.99/month</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 2</li>
              <li className="text-gray-600 dark:text-gray-400">Feature 3</li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
        </div>
        {/* Payment Button */}
        <div className="mt-12 text-center">
          <a
            href="/payment-gateway"
            className="inline-block bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Pay Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

