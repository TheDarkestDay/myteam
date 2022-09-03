import classNames from 'classnames';

import { Button } from './common';

export const CallToAction = () => {
  const graphicsClassName = classNames(
    'before:absolute',
    'before:bg-graphics-cta',
    'before:bg-no-repeat',
    'before:bottom-0',
    'before:w-52',
    'before:h-30 lg:before:h-36',
  );
  const rootClassName = classNames(
    'relative',
    graphicsClassName
  );

  return (
    <section className={rootClassName}>
      <div className="bg-primaryLight flex flex-row flex-wrap gap-6 items-center justify-center px-25 lg:px-65 py-21 md:justify-between">
        <h2 className="text-3xl lg:text-4xl text-center md:text-left font-bold">
          Ready to get started?
        </h2>

        <Button href="/contact" theme="light">
          Contact us
        </Button>
      </div>
    </section>
  );
};