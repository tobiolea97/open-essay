import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

export const LoadingReviewLayoutComponent = () => {
    const openAiSelector = useSelector((state) => state.OpenAi)
    return (
        <main className="main-review">
            <div>
            </div>
            <div className="title">
              <h2>Your version</h2>
            </div>
            <div className="title">
              <h2>How to improve it?</h2>
            </div>
            <div className="title">
              <h2>GPT version</h2>
            </div>
            <div className="paragraph">
                {openAiSelector.sentMessage}
            </div>
            <div className="feedback">
            </div>
            <div className="rewrite">
            </div>
        </main>
    )
}

export default LoadingReviewLayoutComponent;