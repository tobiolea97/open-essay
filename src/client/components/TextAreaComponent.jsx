import React from 'react';

export const TextAreaComponent = () => {
    return (
        <section className="text-area">
          <form>
            <textarea className="text-area-input" placeholder="Write your essay here..." rows="20"></textarea>
            <button className="button" type="submit">Submit</button>
          </form>
        </section>
    )
}

export default TextAreaComponent;