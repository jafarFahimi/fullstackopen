import React, { useState } from "react";
import Statistics from "./components/Statistics";
// import obj from library;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <main>
      <h1>Give Feedback</h1>
      <div>
        <button type="button" onClick={() => setGood(good + 1)}>
          Good
        </button>
        <button type="button" onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <button type="button" onClick={() => setBad(bad + 1)}>
          Bad
        </button>
      </div>
      <div>
        {good | neutral | bad ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <p>No Feedback is Given</p>
        )}
      </div>
    </main>
  );
};

export default App;
