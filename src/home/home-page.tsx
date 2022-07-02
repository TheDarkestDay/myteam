import { Intro } from './intro';
import { CallToAction } from './call-to-action'

type Props = {
  path: string;
}

export const HomePage = (props: Props) => {
  return (
    <main>
      <Intro />
      <CallToAction />
    </main>
  );
};