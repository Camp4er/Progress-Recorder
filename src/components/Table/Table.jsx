import React, { useEffect, useState } from 'react';
import tableData from '../../data/tablecontents.json';
import './Table.css';

import { playSound } from '../../utils/playSound';
import button_click_sound from '../../Audio/mixkit-hard-typewriter-click-1119.wav';
import hover_sound from '../../Audio/tap-notification-180637.mp3';

const Table = ({ selectedCategory, startTimer, timeLeft, onButtonClick, scores, resetTable }) => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [clickedButtons, setClickedButtons] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const table = tableData.tables.find(table => table.title === selectedCategory);
      setSelectedTable(table);
    }
  }, [selectedCategory]);

  useEffect(() => {
    setClickedButtons([]);
  }, [resetTable]);

  const handleClick = (criterionIndex, level) => {
    const buttonKey = `${criterionIndex}-${level}`;
    const isClicked = clickedButtons.includes(buttonKey);
    const newClickedButtons = isClicked
      ? clickedButtons.filter(key => key !== buttonKey)
      : [...clickedButtons, buttonKey];

    setClickedButtons(newClickedButtons);
    onButtonClick(level, isClicked ? -100 : 100);
    playSound(button_click_sound);
  };

  return (
    <div className="table-outer">
      {selectedTable ? (
        <div className="table-context">
          <table>
            <thead className='font-press-start-2p'>
              <tr className='criteria font-press-start-2p'>
                <th className='table-cross-section font-roboto-condensed'>(Read rows left-to-right)</th>
                <th className='font-bold table-bad font-press-start-2p'>Bad</th>
                <th className='font-bold table-better font-press-start-2p'>Better</th>
                <th className='font-bold table-best font-press-start-2p'>Best</th>
              </tr>
            </thead>
            <tbody className='font-roboto-condensed'>
              {selectedTable.criteria?.map((criterion, index) => (
                <tr key={index} className='content'>
                  <td className='font-press-start-2p'>{criterion?.name}</td>
                  <td className="table-content">
                    <button
                      className={`cursor-pointer font-roboto-condensed ${clickedButtons.includes(`${index}-bad`) ? 'active' : ''}`}
                      onClick={() => handleClick(index, 'bad')} 
                      onMouseEnter={() => playSound(hover_sound)}
                    >
                      {criterion.bad}
                    </button>
                  </td>
                  <td className="table-content">
                    <button
                      className={`cursor-pointer font-roboto-condensed ${clickedButtons.includes(`${index}-better`) ? 'active' : ''}`}
                      onClick={() => handleClick(index, 'better')} onMouseEnter={() => playSound(hover_sound)}
                    >
                      {criterion.better}
                    </button>
                  </td>
                  <td className="table-content">
                    <button
                      className={`cursor-pointer font-roboto-condensed ${clickedButtons.includes(`${index}-best`) ? 'active' : ''}`}
                      onClick={() => handleClick(index, 'best')} onMouseEnter={() => playSound(hover_sound)}
                    >
                      {criterion.best}
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className='font-press-start-2p'>SCORE</td>
                <td>{scores.bad}</td>
                <td>{scores.better}</td>
                <td>{scores.best}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className='table-extra'>No table data available</p>
      )}
    </div>
  );
};

export default Table;
