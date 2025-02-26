'use client';

import { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative flex h-screen items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 opacity-[0.02]' />
      </div>

      <div className='relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8'>
        <span
          className={`mb-4 block text-sm font-semibold uppercase tracking-widest text-gray-400 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Welcome to my portfolio
        </span>

        <h1
          className={`mb-6 text-5xl font-bold text-white transition-all delay-100 duration-700 sm:text-6xl lg:text-7xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Nico Swan
        </h1>

        <p
          className={`mb-8 text-xl font-light text-gray-300 transition-all delay-200 duration-700 sm:text-2xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Senior Full Stack Software Engineer <br />& Enterprise Systems
          Architect
        </p>

        <p
          className={`mx-auto mb-12 max-w-2xl text-lg text-gray-400 transition-all delay-300 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Building robust, scalable solutions with modern technologies and best
          practices
        </p>

        <button
          onClick={scrollToContent}
          className={`animate-bounce text-gray-400 transition-colors duration-300 hover:text-orange-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label='Scroll down'
        >
          <ArrowDownCircle size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
