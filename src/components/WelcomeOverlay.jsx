import React from 'react';
import { Heart } from 'lucide-react';

const WelcomeOverlay = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-xl transform transition-all">
        <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
        <h2 className="text-2xl font-bold mb-4">¡Bienvenida mi amor!</h2>
        <p className="text-gray-600 mb-6">
          He preparado algo especial para ti. Toca el botón para comenzar nuestra experiencia juntos.
        </p>
        <button
          onClick={onStart}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 flex items-center justify-center mx-auto space-x-2"
        >
          <span>Comenzar</span>
          <Heart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default WelcomeOverlay;