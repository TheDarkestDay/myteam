import { Button, FeatureSection, Frame, InputField } from '../common';

type Props = {
  path: string;
}

export const ContactPage = (props: Props) => {
  return (
    <main>
      <section className="bg-primaryDark">
        <Frame className="flex flex-wrap gap-7 justify-center lg:justify-between">
          <div>
            <h2 className="text-white text-center lg:text-left font-bold text-6xl mb-4">
              Contact
            </h2>

            <p className="mb-12 text-center lg:text-left text-primaryLight font-bold text-3xl">
              Ask us about
            </p>

            <FeatureSection className="mb-2" titleColor="white" title="The quality of our talent network" icon="people" />
            <FeatureSection className="mb-2" titleColor="white" title="Usage and implementation of our software" icon="process" />
            <FeatureSection titleColor="white" title="How we help drive innovation" icon="analytics" />
          </div>

          <form className="w-full lg:w-2/5 lg:shrink">
            <div className="mb-6">
              <InputField className="mb-6" name="username" label="Name" />
              <InputField className="mb-6" name="email" label="Email" type="email" />
              <InputField className="mb-6" name="companyName" label="Company Name" />
              <InputField className="mb-6" name="title" label="Title" />
              <InputField className="mb-6" name="message" label="Message" />
            </div>
            <Button>
              Submit
            </Button>
          </form>
        </Frame>
      </section>
    </main>
  );
};