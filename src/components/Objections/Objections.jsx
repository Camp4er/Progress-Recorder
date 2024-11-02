import React from 'react';
import './Objections.css';
import objections_logo from '../../Assests/download.svg';

const Objections = () => {
  return (
    <div className="objections">
      <div className="objections-up">
        <div className="objections-left-A">
          <a href="/">
            <img src={objections_logo} alt="objections" />
            <p className="font-press-start-2p">Objections</p>
          </a>
        </div>
        <div className="objections-right-A ffont-press-start-2p">
          Help and Privacy
        </div>
      </div>
      <div className="objections-down">
        <div className="objections-left-B">
          <p>© 2024 Handling Objections</p>
        </div>
        <div className="objections-right-B">
          <a href="https://twitter.com/Camp4er"><i className="fa fa-twitter"></i></a>
          <a href="https://github.com/Camp4er"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/poorva-saxena-983642256/"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Objections;
