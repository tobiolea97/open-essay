import React from 'react';
import { useSelector } from 'react-redux';

export const InstructionsComponent = () => {
    const currentAssignment = useSelector((state) => state.data.currentAssignment);
    
    return (
        <section className="instructions">
            <h2>Instructions</h2>
                {currentAssignment && currentAssignment.assignment && 
                  currentAssignment.assignment.map((element, index) => (
                    typeof element === 'string'
                    ? <p key={index}>{element}</p>
                    : (
                      <ul key={index}>
                        {element.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    )
                ))
                }
          </section>
    )
}

export default InstructionsComponent;