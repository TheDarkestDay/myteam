import { Intro } from './Intro';

type Props = {
  path: string;
}

export const HomePage = (props: Props) => {
  return (
    <main>
      <Intro />
    </main>
  );
};