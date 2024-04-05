import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GridHeaderComponent } from './GridHeaderComponent';

export const LoadingReviewLayoutComponent = () => {
    const openAiSelector = useSelector((state) => state.OpenAi)
    return (
        <main className="main-review">
            <GridHeaderComponent />
            <div className="paragraph">
              {openAiSelector.sentMessage.map((message, index) => (
                <p key={index}>{message}</p>
              ))}
            </div>
            <div className="feedback">
            </div>
            <div className="rewrite">
            </div>
        </main>
    )
}

export default LoadingReviewLayoutComponent;