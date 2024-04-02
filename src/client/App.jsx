import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
          <img src='gpt-logo.png' alt='GPT-3' />
          <h1>Open Essay</h1>
      </header>
      <main>
        <div className="container">
          <section>
            <h2>Instructions</h2>
            <p>
              Your principal has suggested a project in which groups of students spend three days on a survival exercise, living 
              in a remote place where they have to organise their own shelter, food and heat. You have made the notes below.
              <ul>
                <li>self-sufficiency</li>
                <li>insight into different living conditions</li>
                <li>teamwork</li>
              </ul>
              Opinions expressed by students:
              <ul>
                <li>it could be dangerous</li>
                <li>three days is too short to gain insight</li>
                <li>participants would need considerable preparation</li>
              </ul>
              Write an essay discussing two of the arguments in your notes. You should explain which of the arguments you think is more important and provide reasons to support your opinion.
            </p>
          </section>
          <form>
            <textarea className="text-area-input" placeholder="Write your essay here..." rows="20"></textarea>
            <button className="button" type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
