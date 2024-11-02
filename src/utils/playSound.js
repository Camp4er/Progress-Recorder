// src/utils/playSound.js
let audioContext;

const unlockAudioContext = () => {
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
};

const initializeAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    document.body.addEventListener('click', unlockAudioContext, { once: true });
  }
};

export const playSound = (soundFile) => {
  initializeAudioContext();

  const audio = new Audio(soundFile);
  audio.play().catch(error => {
    console.log('Error playing sound:', error);
  });
};

