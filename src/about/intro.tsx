import classNames from 'classnames';

import { Frame } from '../common';

export const Intro = () => {
  const graphicsClassName = `
    before:absolute before:bottom-0 before:right-0
    before:w-25 before:h-25 md:before:h-50
    before:bg-graphics-about 
  `;

  const frameClassName = classNames(
    'relative bg-primaryDark',
    'pb-27 md:pb-40',
    graphicsClassName
  );

  return (
    <Frame className={frameClassName}>
      <section className="flex flex-wrap gap-6 justify-center lg:justify-between">
        <h2 className="w-full lg:w-64 text-white text-center lg:text-left text-6xl font-bold">
          About
        </h2>

        <div className="text-white text-lg flex w-96 lg:w-3/5 text-center lg:text-left flex-col before:hidden lg:before:block before:bg-primaryLight before:w-12 before:h-1 before:self-start before:mb-10">
          <p className="mt-auto">
            Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
          </p>
        </div>
      </section>
    </Frame>
  );
};