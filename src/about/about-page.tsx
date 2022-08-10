import { Clients } from './clients';
import { Intro } from './intro';
import { Team } from './team';

export const AboutPage = () => {
  return (
    <main>
      <Intro />
      <Team />
      <Clients />
    </main>
  );
};