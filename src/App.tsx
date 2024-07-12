import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Joke } from './components/Joke/Joke';

import { sourceOfJokes } from './source/jokes-data.ts';

import { MdOutlineUndo } from 'react-icons/md';
import './App.css';

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
        <div className="app__container joke__container">
          <div className="joke__welcome">
            <h2>
              {userName}
              <br />
              There are jokes for you!
            </h2>
          </div>
          <div className="jokes__overview">
            {jokesData.map((item) => (
              <Joke
                key={item.id}
                setup={item.setup}
                punchline={item.punchline}
              />
            ))}
          </div>
          <button
            className="joke__container__back-button"
            type="button"
            onClick={() =>
              setJokesData([{ id: 0, type: '', setup: '', punchline: '' }])
            }
          >
            <MdOutlineUndo className="joke__container__back-button__back-icon" />
          </button>
        </div>
      ) : (
        <div className="form__container form__container">
          <div className="form__container__foreground">
            <h2 className="form__container__welcome">
              Welcome to jokes generator
            </h2>
            <Form onSubmitData={handleSendData} />
          </div>
          <img className="form__container__waves" src="/waves.svg" alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
