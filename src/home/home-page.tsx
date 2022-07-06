import { Intro } from './intro';
import { Features } from './features';
import { Testimonials } from './testimonials';

type Props = {
  path: string;
}

export const HomePage = (_props: Props) => {
  return (
    <main>
      <Intro />
      <Features />
      <Testimonials />
    </main>
  );
};