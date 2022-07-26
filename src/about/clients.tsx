import { Frame } from '../common';

export const Clients = () => {
  return (
    <section className="bg-secondaryDarkDecoration">
      <Frame size="lg">
        <h2 className="text-white text-center text-5xl font-bold mb-16">
          Some of our clients
        </h2>

        <div className="flex gap-10 flex-wrap flex-row items-center">
          <div className="w-full md:w-1/5-gap-10 min-w-max grow-1">
            <img className="mx-auto" width="165" height="28" src="/src/assets/the-verge-logo.svg" alt="The Verge logo" />
          </div>
          <div className="w-full md:w-1/5-gap-10 min-w-max grow-1">
            <img className="mx-auto" width="184" height="23" src="/src/assets/jakarta-post-logo.svg" alt="Jakarta Post logo" />
          </div>
          <div className="w-full md:w-1/5-gap-10 min-w-max grow-1">
            <img className="mx-auto" width="180" height="28" src="/src/assets/the-guardian-logo.svg" alt="The Guardian logo" />
          </div>
          <div className="w-full md:w-1/5-gap-10 min-w-max grow-1">
            <img className="mx-auto" width="165" height="28" src="/src/assets/techradar-logo.svg" alt="Techradar logo" />
          </div>
          <div className="w-full md:w-1/5-gap-10 min-w-max grow-1">
            <img className="mx-auto" width="98" height="45" src="/src/assets/gadgets-now-logo.svg" alt="Gadgets Now logo" />
          </div>
        </div>
      </Frame>
    </section>
  );
};