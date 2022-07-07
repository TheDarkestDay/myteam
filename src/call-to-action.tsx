import { Button, Frame } from './common';

export const CallToAction = () => {
  return (
    <Frame size="md" className="bg-primaryLight">
      <section className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">
          Ready to get started?
        </h2>

        <Button href="/contact" theme="light">
          Contact us
        </Button>
      </section>
    </Frame>
  );
};