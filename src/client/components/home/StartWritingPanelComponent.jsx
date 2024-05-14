import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

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
      <div className="start-writing-wrapper">
        <h2>Do you want to write?</h2>
        <div className='writing-panel'>
            <div>
                <p id="level-label">Level</p>
            </div>
            <div>
                <p id="task-label">Task</p>
            </div>
            <div>
                <select id="level-option">
                    {
                        levels && levels.map((level) => {
                            return <option key={level.id} value={level.id}>{level.name}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <select id="task-option">
                    {
                        writingAreas && writingAreas.map((writingArea) => {
                            return <option key={writingArea.id} value={writingArea.id}>{writingArea.name}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <button className="bg-black-1 color-white-1" onClick={startWriting}>Start writing</button>
            </div>
        </div>
      </div>
    )
}

export default StartWritingPanelComponent;