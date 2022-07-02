import { Frame } from '../common';

export const Intro = () => {
  return (
    <Frame className="bg-primaryDark">
      <section className="flex justify-between pb-40">
        <h2 className="w-80 text-white text-6xl font-bold">
          Find the best <span className="text-primaryLight">talent</span>
        </h2>

        <div className="w-80 text-white text-lg flex flex-col before:block before:bg-secondaryBlue before:w-12 before:h-1 before:self-start">
          <p className="mt-auto">
            Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
          </p>
        </div>
      </section>
    </Frame>
  );
};