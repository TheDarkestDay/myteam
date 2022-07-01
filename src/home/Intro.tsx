export const Intro = () => {
  return (
    <section className="bg-primaryDark flex justify-between py-4 px-40 pb-40">
      <h2 className="w-80 text-white text-6xl font-bold">
        Find the best <span className="text-primaryLight">talent</span>
      </h2>

      <div className="w-80 text-white text-lg flex flex-col before:block before:bg-secondaryBlue before:w-12 before:h-1 before:self-start">
        <p className="mt-auto">
          Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
        </p>
      </div>
    </section>
  );
};