import classNames from 'classnames';

import { Button, Frame } from './common';

export const CallToAction = () => {
  const graphicsClassName = '';
  const rootClassName = classNames(
    'relative',
    'before:absolute',
    'before:bg-graphics-cta',
    'before:bg-no-repeat',
    'before:bottom-0',
    'before:w-52',
    'before:h-36',
    graphicsClassName
  );

  return (
    <section className={rootClassName}>
      <Frame size="md" className="bg-primaryLight flex items-center justify-between">
        <h2 className="text-4xl font-bold">
          Ready to get started?
        </h2>

        <Button href="/contact" theme="light">
          Contact us
        </Button>
      </Frame>
    </section>
  );
};