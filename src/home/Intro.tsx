import classNames from 'classnames';

import { Frame } from '../common';

export const Intro = () => {
  const leftGraphicsClassName = 'before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-no-repeat before:bg-graphics-intro-left before:top-0 before:left-0 before:w-52 before:h-52';
  const bottomGraphicsClassName = 'after:absolute after:bg-no-repeat after:bg-graphics-intro-bottom after:bottom-0 after:right-0 after:w-52 after:h-52';

  const rootClassName = classNames(
    'relative',
    leftGraphicsClassName,
    bottomGraphicsClassName
  );

  const frameClassName = classNames(
    'bg-primaryDark flex justify-between pb-40',
    
  );

  return (
    <section className={rootClassName}>
      <Frame className={frameClassName}>
          <h2 className="w-80 text-white text-6xl font-bold">
            Find the best <span className="text-primaryLight">talent</span>
          </h2>

          <div className="w-80 text-white text-lg flex flex-col before:block before:bg-secondaryBlue before:w-12 before:h-1 before:self-start before:mb-16">
            <p className="mt-auto">
              Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
            </p>
          </div>
      </Frame>
    </section>
  );
};