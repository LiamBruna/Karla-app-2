import React, { useState, useEffect, useRef } from 'react';
import AudioControl from './AudioControl';
import dia from '../sounds/Buenos-dias.mp3';
import tarde from '../sounds/Buenas-tardes.mp3';
import noche from '../sounds/Buenas-noches.mp3';

const Header = () => {
  const [message, setMessage] = useState('');
  const [audioSrc, setAudioSrc] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasAttemptedAutoplay = useRef(false);

  const attemptAutoplay = async () => {
    try {
      if (audioRef.current && !hasAttemptedAutoplay.current) {
        hasAttemptedAutoplay.current = true;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Autoplay blocked by browser. Please click play.');
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const updateMessageAndMusic = () => {
      const hours = new Date().getHours();
      if (hours >= 22 || hours < 6) {
        setMessage(
          'BUENAS NOCHES MI WAWITA HERMOSA, TE AMO MUCHÍSIMO!❤️'
        );
        setAudioSrc(noche);
      } else if (hours >= 6 && hours < 12) {
        setMessage(
          'BUENOS DÍAS MI PRINCESA, TE AMITO DEMASIADOOOOO!❤️'
        );
        setAudioSrc(dia);
      } else if (hours >= 12 && hours < 20) {
        setMessage(
          'BUENAS TARDES MI AMOR, NO OLVIDES QUE AQUÍ ESTOY YO PARA CUIDARTE Y AMARTE SIEMPRE!❤️'
        );
        setAudioSrc(tarde);
      } else {
        setMessage(
          'BUENAS NOCHES MI BB PRECIOSA, QUE TENGAS UNA LINDA NOCHE, TE AMO MUCHO!❤️'
        );
        setAudioSrc(noche);
      }
    };

    updateMessageAndMusic();
    const interval = setInterval(updateMessageAndMusic, 60000);

    // Intenta reproducir automáticamente cuando el componente se monta
    attemptAutoplay();

    // Agrega listeners para eventos de interacción del usuario
    const handleUserInteraction = () => {
      attemptAutoplay();
      // Remueve los listeners después del primer intento
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      clearInterval(interval);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (audioSrc && audioRef.current) {
      audioRef.current.load();
      attemptAutoplay();
    }
  }, [audioSrc]);

  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
  };

  return (
    <div className="relative">
      <h1 className="titulo">
        {message.split('<br />').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < message.split('<br />').length - 1 && <br />}
          </React.Fragment>
        ))}
      </h1>
      
      {audioSrc && (
        <div className="fixed bottom-4 right-4 z-50">
          <audio
            ref={audioRef}
            src={audioSrc}
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <AudioControl 
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
          />
        </div>
      )}
    </div>
  );
};

export default Header;