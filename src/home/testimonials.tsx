import { Frame } from '../common';
import { Testimony } from './testimony';

export const Testimonials = () => {
  return (
    <section className="bg-secondaryDeepGreen">
      <Frame>
        <h2 className="text-white font-bold text-center text-5xl mb-14">
          Delivering real results for top companies. Some of our <span className="text-secondaryBlue">success stories.</span>
        </h2>

        <div className="flex">
          <Testimony 
            text="“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”" 
            author="Arthur Clarke"
            avatar="/src/assets/aclarke-photo.png" 
            role="Co-founder of MyPhysio" />
          <Testimony 
            text="”We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”" 
            author="Alysha Reese"
            avatar="/src/assets/areese-photo.png" 
            role="Founder of Manage" />
          <Testimony 
            text="”The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”" 
            author="Kady Baker"
            avatar="/src/assets/kbaker-photo.png" 
            role="Product manager at Bookmark" />
        </div>
      </Frame>
    </section>
  );
};