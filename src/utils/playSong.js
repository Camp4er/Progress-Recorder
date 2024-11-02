const playSong = (songRef) => {
    if (songRef && songRef.current) {
      songRef.current.play();
    }
  };
  
  export default playSong;