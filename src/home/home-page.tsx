import { Intro } from './intro';
import { Features } from './features';
import { Testimonials } from './testimonials';

export const HomePage = () => {
  return (
    <main>
      <Intro />
      <Features />
      <Testimonials />
    </main>
  );
};