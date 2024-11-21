import React from 'react';
import { Play, Pause } from 'lucide-react';

const AudioControl = ({ isPlaying, onPlayPause }) => {
  return (
    <button
      onClick={onPlayPause}
      className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center space-x-2"
      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
    >
      {isPlaying ? (
        <Pause className="h-6 w-6" />
      ) : (
        <Play className="h-6 w-6" />
      )}
    </button>
  );
};

export default AudioControl;