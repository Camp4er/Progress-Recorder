import React, { useState, useEffect } from 'react';
import './Featured.css';
import featured_template from '../../Assests/featured template.svg';
import Intro from '../Intro/Intro';
import Table from '../Table/Table';
import introductionData from '../../data/introduction.json'; 

const Featured = ({ startTimer, timeLeft, onButtonClick, scores, resetTable, setResetTable }) => {
  const [selectedCategory, setSelectedCategory] = useState('job-application');
  const [content, setContent] = useState(introductionData['job-application']);

  useEffect(() => {
    setContent(introductionData[selectedCategory]);
    // Trigger resetTable when category changes
    setResetTable(true);
  }, [selectedCategory]);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="featured">
      <div className="featured-bar">
        <div className="featured-dropdown cursor-pointer">
          <select id="category-select" onChange={handleChange} value={selectedCategory}>
            <option value="job-application">Job Application Readiness</option>
            <option value="project-planning">Project Planning Success</option>
            <option value="study-habits">Study Habit Analyzer</option>
            <option value="fitness-progress">Fitness Progress Tracker</option>
            <option value="travel-preparation">Travel Preparation Checker</option>
          </select>
        </div>
        <div className='featured-template cursor-pointer'>
          <a href='https://www.github.com/Camp4er' target='_blank' rel="noreferrer">
            <img src={featured_template} alt="template"/>
          </a>
        </div>
      </div>
      <div className="featured-content">
        <div className="content">
          <Intro selectedCategory={selectedCategory} content={content}/>
          <Table selectedCategory={selectedCategory} startTimer={startTimer} timeLeft={timeLeft} onButtonClick={onButtonClick} scores={scores} resetTable={resetTable} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
