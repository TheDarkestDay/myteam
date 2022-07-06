import { Team } from './team';

type Props = {
  path: string;
}

export const AboutPage = (props: Props) => {
  return (
    <main>
      <Team />
    </main>
  );
};