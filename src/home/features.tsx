import classNames from 'classnames';
import { Frame, FeatureSection } from '../common';

const topGraphicsClassName = 'before:absolute before:h-1 before:bg-primaryLight before:w-12.5 before:-top-6 before:left-0';
const frameClassName = 'flex-col flex lg:flex-row justify-between';
const headerClassName = classNames(
  'relative text-white mb-14 md:mb-16 lg:mb-0 font-bold text-3xl lg:text-5xl w-60 md:w-111.25 lg:w-96',
  topGraphicsClassName,
);
const sectionClassName = `
  bg-secondaryDarkDecoration
  relative
  after:absolute after:right-0
  after:top-0 lg:after:top-auto lg:after:bottom-0 
  after:w-25 after:h-61 
  after:bg-graphics-features after:bg-no-repeat
`;

export const Features = () => {
  return (
    <section className={sectionClassName}>
      <Frame size="lg" className={frameClassName}>
        <h2 className={headerClassName}>
          Build &amp; manage distributed teams like no one else.
        </h2>

        <div className="lg:basis-135">
          <FeatureSection
            className="mb-12 md:mb-8"
            icon="people" 
            title="Experienced Individuals" 
            text="Our network is made up of highly experienced professionals who are passionate about what they do." 
          />

          <FeatureSection
            className="mb-12 md:mb-8"
            icon="process"
            title="Easy to Implement" 
            text="Our processes have been refined over years of implementation meaning our teams always deliver." 
          />

          <FeatureSection
            icon="analytics"
            title="Enhanced Productivity" 
            text="Our customized platform with in-built analytics helps you manage your distributed teams." 
          />
        </div>
      </Frame>
    </section>
  );
};