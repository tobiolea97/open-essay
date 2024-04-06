import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../styles/home.css';

export const StartWritingPanelComponent = () => {
    const navigate = useNavigate();

    const startWriting = () => {
        const level = document.getElementById('level-option').value;
        const task = document.getElementById('task-option').value;
        navigate(`/write?level=${level}&task=${task}`);
    }

    return (
      <>
        <h2>Do you want to write?</h2>
        <div className='writing-panel'>
            <label id="level-label">Choose a level</label>
            <label id="task-label">Choose a task</label>
            <select id="level-option">
                <option value="FCE">B2 - First</option>
                <option value="CAE">C1 - Advanced</option>
                <option value="CPE">C2 -Proficency</option>
            </select>
            <select id="task-option">
                <option value="essay">Essay</option>
                <option value="article">Article</option>
                <option value="review">Review</option>
                <option value="email">Email</option>
            </select>
            <button id="start-writting-btn" onClick={startWriting}>Start writing</button>
        </div>
      </>
    )
}

export default StartWritingPanelComponent;