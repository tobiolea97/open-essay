import React from 'react';

export const TextAreaComponent = () => {
    return (
        <form className="text-area">
        <textarea className="text-area-input" placeholder="Write your essay here..." rows="20"></textarea>
        <button className="button" type="submit">Submit</button>
        </form>
    )
}

export default TextAreaComponent;