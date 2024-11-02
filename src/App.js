import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Featured from "./components/Featured/Featured";
import Score from "./components/Scorecard/Score";
import Explain from "./components/Explain/Explain";
import Email from "./components/Email/Email";
//import Objections from "./components/Objections/Objections";
import timerStartSong from './Audio/mixkit-fight-till-the-end-81.mp3'; // Import your song file
import buttonClickSound from './Audio/mixkit-hard-typewriter-click-1119.wav'; // Add other audio files here
import hoverSound from './Audio/tap-notification-180637.mp3';

function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [scores, setScores] = useState({ bad: 0, better: 0, best: 0 });
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isMuted, setIsMuted] = useState(false); // Add mute state
  const [isPaused, setIsPaused] = useState(true); // Initialize as true because the timer is initially not running
  const [resetTable, setResetTable] = useState(false); // Add state for resetting the table
  const timerRef = useRef(null);
  const audioRef = useRef(new Audio(timerStartSong)); // Create a ref for the audio element
  const buttonClickAudio = useRef(new Audio(buttonClickSound));
  const hoverAudio = useRef(new Audio(hoverSound));

  useEffect(() => {
    setTotalScore(scores.bad + scores.better + scores.best);
  }, [scores]);

  useEffect(() => {
    if (timeLeft <= 0 && timerRef.current) {
      setIsPaused(true);
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [timeLeft]);

  useEffect(() => {
    // Reset table when resetTable state changes
    if (resetTable) {
      setScores({ bad: 0, better: 0, best: 0 });
      setTimeLeft(300); // Reset to 5 minutes
      setIsPaused(true);
      clearInterval(timerRef.current);
      timerRef.current = null;
      audioRef.current.pause(); // Pause the song when timer is reset
      audioRef.current.currentTime = 0; // Reset the song to the beginning
      setResetTable(false); // Reset the resetTable state
    }
  }, [resetTable]);

  const startTimer = () => {
    if (isPaused) {
      setIsPaused(false);
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
      }, 1000);
      audioRef.current.play(); // Play the song when the timer starts
    }
  };

  const pauseTimer = () => {
    setIsPaused(true);
    clearInterval(timerRef.current);
    timerRef.current = null;
    audioRef.current.pause(); // Pause the song when timer is paused
  };

  const resetTimer = () => {
    setIsPaused(true);
    setTimeLeft(300); // Reset to 5 minutes
    clearInterval(timerRef.current);
    timerRef.current = null;
    audioRef.current.pause(); // Pause the song when timer is reset
    audioRef.current.currentTime = 0; // Reset the song to the beginning
    setScores({ bad: 0, better: 0, best: 0 }); // Reset the scores
    setResetTable(true); // Trigger table reset
  };

  const handleTableButtonClick = (scoreType, change) => {
    setScores(prevScores => ({
      ...prevScores,
      [scoreType]: prevScores[scoreType] + change,
    }));
    startTimer();
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
    const audioElements = [audioRef.current, buttonClickAudio.current, hoverAudio.current];
    audioElements.forEach(audio => {
      audio.muted = !audio.muted;
    });
  };

  return (
    <>
      <Featured
        onButtonClick={handleTableButtonClick}
        startTimer={startTimer}
        timeLeft={timeLeft}
        scores={scores}
        resetTable={resetTable}
        setResetTable={setResetTable} // Pass setResetTable to Featured component
      />
      <Score
        totalScore={totalScore}
        timeLeft={timeLeft}
        onStart={isPaused ? startTimer : pauseTimer}
        onReset={resetTimer}
        onMute={toggleMute}
        isMuted={isMuted}
        isPaused={isPaused} // Pass the isPaused state to Score component
      />
      <Explain />
      <Email />
    </>
  );
}

export default App;
