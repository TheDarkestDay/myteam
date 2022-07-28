import classNames from 'classnames';
import { Frame, FeatureSection } from '../common';

const topGraphicsClassName = 'before:block lg:before:hidden before:h-[4px] before:bg-primaryLight before:w-12 before:mb-8';
const frameClassName = 'flex-col flex lg:flex-row justify-between';

export const Features = () => {
  return (
    <section className="bg-secondaryDarkDecoration">
      <Frame size="lg" className={classNames(frameClassName, topGraphicsClassName)}>
        <h2 className="text-white mb-6 lg:mb-0 font-bold text-3xl lg:text-5xl w-full lg:w-96">
          Build &amp; manage distributed teams like no one else.
        </h2>

        <div>
          <FeatureSection
            className="mb-8"
            icon="people" 
            title="Experienced Individuals" 
            text="Our network is made up of highly experienced professionals who are passionate about what they do." 
          />

          <FeatureSection
            className="mb-8" 
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