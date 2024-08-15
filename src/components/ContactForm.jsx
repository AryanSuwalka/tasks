import React from 'react';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-6 transition-transform transform-gpu hover:scale-105 hover:shadow-xl ease-in-out duration-300">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 transition-transform transform-gpu duration-300 ease-in-out"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 transition-transform transform-gpu duration-300 ease-in-out"
          placeholder="Your Email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 transition-transform transform-gpu duration-300 ease-in-out"
          placeholder="Your Message"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-transform transform-gpu duration-300 ease-in-out"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
