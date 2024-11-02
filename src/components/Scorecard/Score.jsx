import React from 'react';
import './Score.css';
import mute_button from '../../Assests/download (1).svg';
import unmute_icon from '../../Assests/sound.png';

const Score = ({ totalScore, timeLeft, onStart, onReset, onMute, isMuted, isPaused }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className='scorecard'>
      <h1 className='font-press-start-2p'>TOTAL SCORE: <span className="font-bold scorecard-green">{totalScore}</span></h1>
      <div className='scorecard-right'>
        <button
          className={`scorecard-start font-press-start-2p ${timeLeft < 300 ? 'active' : ''}`}
          style={{ backgroundColor: timeLeft < 300 ? 'yellow' : '', color: 'black' }}
          onClick={onStart}
        >
          {isPaused ? 'Start' : 'Pause'}
        </button>
        
        <button className='scorecard-mute' onClick={onMute}>
        <img 
          src={isMuted ? mute_button : unmute_icon } 
          alt="Mute/Unmute" 
        />
        </button>
        <button className="scorecard-timer font-bold font-press-start-2p">{formatTime(timeLeft)}</button>
        <button className='scorecard-restart font-press-start-2p' onClick={onReset}>Start Over</button>
      </div>
    </div>
  );
};

export default Score;
