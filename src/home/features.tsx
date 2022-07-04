import { Frame } from '../common';
import { FeatureSection } from './feature-section';

export const Features = () => {
  return (
    <section className="bg-secondaryDarkDecoration">
      <Frame className="flex justify-between">
        <h2 className="text-white font-bold text-5xl w-96">
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