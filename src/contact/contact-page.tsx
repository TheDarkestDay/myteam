import classNames from 'classnames';

import { Button, FeatureSection, Frame, InputField } from '../common';

export const ContactPage = () => {
  const topGraphicsClassName = `
    before:hidden md:before:block
    before:absolute before:top-0 before:left-0
    before:bg-graphics-contact-top before:bg-no-repeat before:bg-right
    before:w-50 before:h-50
    before:-translate-x-1/2
  `;

  const bottomGraphicsClassName = `
    after:absolute after:bottom-0 after:right-0
    after:bg-graphics-contact-bottom after:bg-no-repeat
    after:w-25 after:h-25 lg:after:h-50
  `;

  const sectionClassName = classNames(
    'relative bg-primaryDark',
    topGraphicsClassName,
    bottomGraphicsClassName
  );

  return (
    <main>
      <section className={sectionClassName}>
        <Frame className="flex flex-wrap gap-7 justify-center">
          <div className="w-full lg:w-1/2-gap-8">
            <h2 className="text-white text-center lg:text-left font-bold text-6xl mb-4">
              Contact
            </h2>

            <p className="mb-12 text-center lg:text-left text-primaryLight font-bold text-3xl">
              Ask us about
            </p>

            <FeatureSection className="mb-12 md:mb-8" titleColor="white" title="The quality of our talent network" icon="people" />
            <FeatureSection className="mb-12 md:mb-8" titleColor="white" title="Usage and implementation of our software" icon="process" />
            <FeatureSection titleColor="white" title="How we help drive innovation" icon="analytics" />
          </div>

          <form className="w-full lg:w-1/2-gap-8">
            <div className="mb-6">
              <InputField className="mb-6" name="username" label="Name" />
              <InputField className="mb-6" name="email" label="Email" type="email" />
              <InputField className="mb-6" name="companyName" label="Company Name" />
              <InputField className="mb-6" name="title" label="Title" />
              <InputField className="mb-6" name="message" label="Message" multiline />
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