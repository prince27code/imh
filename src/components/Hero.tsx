"use client";
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import video from '../assets/background-video.mp4';
import { TypewriterEffect } from "./ui/typewriter-effect";
import { FlipWords } from "./ui/flip-words";
export default function Hero() {
  const words = [
    {
      text: "International",
      className: "text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
    },
    {
      text: "Media",
      className: "text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
    },
    {
      text: "Hub",
      className: "text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
    },
  ];
  const flipWords = [
    "Media Service Provider",
    "Media Solutions Partner",
    "Media and Marketing Expert",
    "Media Strategy Hub",
    "Media and Event Specialist",
  ];
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-95">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-70"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
      >
        <div className="mb-6 w-full">
          <TypewriterEffect words={words} />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 3,
            duration: 0.5 
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12 h-20"
        >
          <span className="font-semibold text-slate-800">Your Comprehensive </span>
          <FlipWords 
            words={flipWords} 
            duration={4000} 
            className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="bg-slate-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow hover:bg-slate-800 mt-4 text-sm sm:text-base"
        >
          Get Started <ChevronRight size={20} />
        </motion.button>
      </motion.div>
    </header>
  );
}