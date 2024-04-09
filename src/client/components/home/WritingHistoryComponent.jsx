import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import '../../styles/home.css';

export const WritingHistoryComponent = () => {
    
    const navigate = useNavigate();
    const writings = useSelector((state) => state.data.writings)

    const startWriting = () => {
        const level = document.getElementById('level-option').value;
        const task = document.getElementById('task-option').value;
        navigate(`/write?level=${level}&task=${task}`);
    }

    return (
      <>
        <h2>Your writing history</h2>
        <div className='history-panel'>
            {writings.map((writing, index) => {
                return (
                    <div className='history-item' key={index}>
                        <p>{writing.level}</p>
                        <p>{writing.writingArea}</p>
                        <p>{writing.name}</p>
                        <button onClick={() => navigate(`/review?assignment=${writing.id}`)}>View</button>
                    </div>
                )
            })}
        </div>
      </>
    )
}

export default WritingHistoryComponent;