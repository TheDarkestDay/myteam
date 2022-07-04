import { Intro } from './intro';
import { CallToAction } from './call-to-action'
import { Features } from './features';

type Props = {
  path: string;
}

export const HomePage = (props: Props) => {
  return (
    <main>
      <Intro />
      <Features />
      <CallToAction />
    </main>
  );
};