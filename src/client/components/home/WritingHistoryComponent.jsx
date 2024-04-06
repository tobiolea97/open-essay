import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../styles/home.css';

export const WritingHistoryComponent = () => {
    
    const navigate = useNavigate();

    const startWriting = () => {
        const level = document.getElementById('level-option').value;
        const task = document.getElementById('task-option').value;
        navigate(`/write?level=${level}&task=${task}`);
    }

    return (
      <>
        <h2>Your writing history</h2>
        <div className='history-panel'>
            <div className='history-item'>
                <p>B2 First</p>
                <p>Essay</p>
                <p>Wildlife conservation</p>
                <button>View</button>
            </div>
            <div className='history-item'>
                <p>B2 First</p>
                <p>Essay</p>
                <p>TV shows</p>
                <button>View</button>
            </div>
            <div className='history-item'>
                <p>B2 First</p>
                <p>Essay</p>
                <p>Wildlife conservation</p>
                <button>View</button>
            </div>
        </div>
      </>
    )
}

export default WritingHistoryComponent;