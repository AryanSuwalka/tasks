import React, { useState } from 'react';
import Modal from './Modal';
import ContactForm from './ContactForm'; // Import the form component


const HeroSection = () => {

  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero-background text-center text-black dark:text-white py-32 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4">



<h1 className="text-5xl font-bold leading-tight mb-4">
          <span className=" hover:text-purple-500 ">Explore</span> 
          <span className=" hover:text-purple-500 "> the </span> 
          <span className=" hover:text-purple-500 ">Possibilities</span> 
          <span className=" hover:text-purple-500 "> of </span> 
          <span className=" hover:font-thin text-purple-400">AI</span> 
          <span className=" hover:font-thin text-purple-400"> Book </span> 
          <span className=" hover:font-thin text-purple-400">Writing</span> <br />
          <span className=" hover:text-purple-500 "> with </span> 
          <span className=" hover:text-purple-500 ">BookAI</span>
        </h1>


        <p className="text-xl  mb-8">
          Unleash the power of AI to create captivating books in minutes.
          Download, Distribute wherever you want. Generate unlimited free books.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            href="/get-started"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </button>
          <button
            href="/api-access"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 px-6 rounded-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Get API Access
          </button>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <ContactForm />
      </Modal>
        </div>
        <p className="mt-6 text-yellow-400">
          Attention: TryBookAI has been acquired by Indicus AI.
        </p>
      </div>
      <div className="absolute inset-0 bg-opacity-50"></div>
      <Modal show={showModal} onClose={toggleModal} />
    </section>
  );
};

export default HeroSection;
