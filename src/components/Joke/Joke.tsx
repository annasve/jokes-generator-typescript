import { useEffect } from 'react';
import './Joke.css';

interface JokeProps {
  setup: string;
  punchline: string;
}

export const Joke = ({ setup, punchline }: JokeProps) => {
  useEffect(() => {
    document.body.className = 'inverted-bgr';
  }, []);

  return (
    <section className="joke__content">
      <p className="joke__setup">{setup || 'something went wrong'}</p>
      <p className="joke__punchline">- {punchline || 'something went wrong'}</p>
    </section>
  );
};
