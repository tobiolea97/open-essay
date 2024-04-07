import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../../styles/home.css';

export const StartWritingPanelComponent = () => {
    const navigate = useNavigate();
    const levels = useSelector((state) => state.data.levels)
    const writingAreas = useSelector((state) => state.data.writingAreas)

    const startWriting = () => {
        const level = document.getElementById('level-option').value;
        const task = document.getElementById('task-option').value;
        navigate(`/write?level=${level}&writingArea=${task}`);
    }

    return (
      <>
        <h2>Do you want to write?</h2>
        <div className='writing-panel'>
            <label id="level-label">Choose a level</label>
            <label id="task-label">Choose a task</label>
            <select id="level-option">
                {
                    levels && levels.map((level) => {
                        return <option key={level.id} value={level.id}>{level.name}</option>
                    })
                }
            </select>
            <select id="task-option">
                {
                    writingAreas && writingAreas.map((writingArea) => {
                        return <option key={writingArea.id} value={writingArea.id}>{writingArea.name}</option>
                    })
                }
            </select>
            <button id="start-writting-btn" onClick={startWriting}>Start writing</button>
        </div>
      </>
    )
}

export default StartWritingPanelComponent;