import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const random = () => Math.floor(Math.random() * anecdotes.length);

  const [selected, setSelected] = useState(random());
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [highest, setHighest] = useState(0);

  const voted = () => {
    // Create a copy of the points array and update the selected anecdote's votes
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;

    // Update the points state
    setPoints(updatedPoints);

    // Find the index of the anecdote with the most votes
    const maxVotes = Math.max(...updatedPoints);
    const maxVotesIndex = updatedPoints.indexOf(maxVotes);

    // Update the highest state
    setHighest(maxVotesIndex);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <br />
      <p>has {points[selected]} votes</p>
      <br />
      <button onClick={voted}>Vote</button>
      <button onClick={() => setSelected(random())}>Next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highest]}</p>
      <p>has {points[highest]} votes</p>
    </div>
  );
};

export default App;