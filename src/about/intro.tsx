import { Frame } from '../common';

export const Intro = () => {
  return (
    <Frame className="bg-primaryDark">
      <section className="flex justify-between pb-40">
        <h2 className="w-80 text-white text-6xl font-bold">
          About
        </h2>

        <div className="text-white text-lg flex grow w-3/5 flex-col before:block before:bg-primaryLight before:w-12 before:h-1 before:self-start before:mb-10">
          <p className="mt-auto">
            Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
          </p>
        </div>
      </section>
    </Frame>
  );
};