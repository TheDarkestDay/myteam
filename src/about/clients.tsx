import { Frame } from '../common';

export const Clients = () => {
  return (
    <section className="bg-secondaryDarkDecoration">
      <Frame size="lg">
        <h2 className="text-white text-center text-5xl font-bold mb-16">
          Some of our clients
        </h2>

        <div className="flex flex-wrap gap-x-20 gap-y-16 items-center">
          <img src="/src/assets/the-verge-logo.svg" alt="The Verge logo" />
          <img src="/src/assets/jakarta-post-logo.svg" alt="Jakarta Post logo" />
          <img src="/src/assets/the-guardian-logo.svg" alt="The Guardian logo" />
          <img src="/src/assets/techradar-logo.svg" alt="Techradar logo" />
          <img src="/src/assets/gadgets-now-logo.svg" alt="Gadgets Now logo" />
        </div>
      </Frame>
    </section>
  );
};