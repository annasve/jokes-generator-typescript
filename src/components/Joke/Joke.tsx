interface JokeProps {
  setup: string;
  punchline: string;
}

export const Joke = ({ setup, punchline }: JokeProps) => {
  return (
    <>
      <p>{setup || 'something went wrong'}</p>
      <p>{punchline || 'something went wrong'}</p>
    </>
  );
};
