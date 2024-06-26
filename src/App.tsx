import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Joke } from './components/Joke/Joke';

import { sourceOfJokes } from './source/jokes-data.ts';

function App() {
  const [userName, setUserName] = useState<string>();
  const [jokesData, setJokesData] = useState<
    { id: number; type: string; setup: string; punchline: string }[]
  >([{ id: 0, type: '', setup: '', punchline: '' }]);

  const generateJokesData = (
    type: string,
    count: number,
    source: { type: string; setup: string; punchline: string }[],
  ) => {
    setJokesData(
      source
        .filter((item) => item.type === type)
        .map((item, index) => ({ ...item, id: index }))
        .slice(0, count),
    );
  };

  const handleSendData = (data: {
    count: number;
    name: string;
    type: string;
  }) => {
    setUserName(data.name);
    generateJokesData(data.type, data.count, sourceOfJokes);
  };

  return (
    <div className="app">
      {jokesData[0].setup !== '' ? (
        <div className="app__container">
          <h2>{userName}</h2>
          <h3>There are jokes for you!</h3>
          {jokesData.map((item) => (
            <Joke key={item.id} setup={item.setup} punchline={item.punchline} />
          ))}
          <span
            className="app__container__back-icon"
            onClick={() => setJokesData([])}
          ></span>
        </div>
      ) : (
        <div className="app__container">
          <h2>Welcome to jokes generator</h2>
          <h3>Please fill the form:</h3>
          <Form onSubmitData={handleSendData} />
        </div>
      )}
    </div>
  );
}

export default App;
