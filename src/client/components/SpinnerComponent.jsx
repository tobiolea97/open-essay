import React from 'react';

export const Spinner = () => {
    return (
        <div className="spinner-background">
          <div className="spinner"></div>
          <p className="loading-label">The server is reading your masterpiece...</p>
        </div>
    )
}

export default Spinner;