import React from 'react';

export const InstructionsComponent = () => {
    return (
        <section className="instructions">
            <h2>Instructions</h2>
            <p>
              Your principal has suggested a project in which groups of students spend three days on a survival exercise, living 
              in a remote place where they have to organise their own shelter, food and heat. You have made the notes below.
            </p>
            <ul>
              <li>self-sufficiency</li>
              <li>insight into different living conditions</li>
              <li>teamwork</li>
            </ul>
            <p>
              Opinions expressed by students:
            </p>
            <ul>
              <li>it could be dangerous</li>
              <li>three days is too short to gain insight</li>
              <li>participants would need considerable preparation</li>
            </ul>
            <p>
              Write an essay discussing two of the arguments in your notes. You should explain which of the arguments you think is more important and provide reasons to support your opinion.
            </p>
          </section>
    )
}

export default InstructionsComponent;