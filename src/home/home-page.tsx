import { Intro } from './intro';
import { CallToAction } from './call-to-action'
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
      <CallToAction />
    </main>
  );
};