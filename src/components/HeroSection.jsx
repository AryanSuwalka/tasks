import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-background text-center text-black dark:text-white py-32 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Explore the Possibilities of <span className="text-purple-400">AI Book Writing</span> with BookAI
        </h1>
        <p className="text-xl  mb-8">
          Unleash the power of AI to create captivating books in minutes.
          Download, Distribute wherever you want. Generate unlimited free books.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/get-started"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-lg"
          >
            Get Started
          </a>
          <a
            href="/api-access"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 px-6 rounded-lg"
          >
            Get API Access
          </a>
        </div>
        <p className="mt-6 text-yellow-400">
          Attention: TryBookAI has been acquired by Indicus AI.
        </p>
      </div>
      <div className="absolute inset-0 bg-opacity-50"></div>
    </section>
  );
};

export default HeroSection;
