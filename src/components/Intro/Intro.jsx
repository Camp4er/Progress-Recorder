import React from 'react';
import './Intro.css';
import character from '../../Assests/character-128w.gif';

const Intro = ({ content }) => {
    if (!content) {
        return <div className='intro-loading'>Loading...</div>;
    }
  return (
    <div className='intro bordered'>
      <h1 className='font-press-start-2p'>{content.title}</h1>
      <div className="intro-gif">
        <img src={character} alt='running soilder' />
        <h2 className='font-roboto-condensed'>{content.description}</h2>
      </div>
      <h3 className='font-roboto-condensed'><span className='font-bold'>{content.headline.split('?')[0]}?</span> {content.headline.split('?')[1]}</h3>
      <p className='font-roboto-condensed'>{content.instructions}</p>
    </div>
  );
}

export default Intro;
