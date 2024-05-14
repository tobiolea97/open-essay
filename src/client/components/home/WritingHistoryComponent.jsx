import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export const WritingHistoryComponent = () => {
    
    const navigate = useNavigate();
    const writings = useSelector((state) => state.data.writings);

    return (
        <div className="writing-history-wrapper">
        { writings && writings.length > 0 &&
            <>
                <h2>Your writing history</h2>
                <div className='history-panel'>
                    <div className="history-header color-black-2">
                        <p>Level</p>
                        <p>Area</p>
                        <p>Topic</p>
                    </div>
                    {writings && writings.map((writing, index) => {
                        return (
                            <div className='history-item' key={index}>
                                <p>{writing.level}</p>
                                <p >{writing.writingArea}</p>
                                <p >{writing.name}</p>
                                <button className="bg-black-1 color-white-1" onClick={() => navigate(`/review?assignment=${writing.id}`)}>View</button>
                            </div>
                        )
                    })}
                </div>
            </>
        }
      </div>
    )
}

export default WritingHistoryComponent;