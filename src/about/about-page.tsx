import { Clients } from './clients';
import { Intro } from './intro';
import { Team } from './team';

type Props = {
  path: string;
}

export const AboutPage = (props: Props) => {
  return (
    <main>
      <Intro />
      <Team />
      <Clients />
    </main>
  );
};