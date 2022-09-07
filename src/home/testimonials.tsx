import classNames from 'classnames';

import aClarkePhotoUrl from '../assets/aclarke-photo.png';
import aReesePhotoUrl from '../assets/areese-photo.png';
import kBakerPhotoUrl from '../assets/kbaker-photo.png';
import { Frame } from '../common';
import { Testimony } from './testimony';

export const Testimonials = () => {
  const topGraphicsClassName = `
    before:absolute before:top-0 before:left-0
    before:bg-graphics-testimonials-top before:bg-no-repeat before:bg-right
    before:w-34.25 before:h-25
  `;

  const bottomGraphicsClassName = `
    after:absolute after:bottom-0 after:right-0
    after:bg-graphics-testimonials-bottom after:bg-no-repeat
    after:w-50 after:h-25
  `;

  const sectionClassName = classNames(
    'relative bg-secondaryDeepGreen',
    topGraphicsClassName,
    bottomGraphicsClassName
  );

  return (
    <section className={sectionClassName}>
      <Frame size="lg" className="pt-36 pb-41 md:pt-28">
        <h2 className="text-white font-bold text-center text-2xl lg:text-5xl mb-14">
          Delivering real results for top companies. Some of our <span className="text-secondaryBlue">success stories.</span>
        </h2>

        <div className="flex items-center flex-wrap gap-7">
          <Testimony
            className="w-full lg:w-1/3-gap-7" 
            text="“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”" 
            author="Arthur Clarke"
            avatar={aClarkePhotoUrl} 
            role="Co-founder of MyPhysio" />
          <Testimony 
            className="w-full lg:w-1/3-gap-7"
            text="”We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”" 
            author="Alysha Reese"
            avatar={aReesePhotoUrl} 
            role="Founder of Manage" />
          <Testimony
            className="w-full lg:w-1/3-gap-7" 
            text="”The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”" 
            author="Kady Baker"
            avatar={kBakerPhotoUrl} 
            role="Product manager at Bookmark" />
        </div>
      </Frame>
    </section>
  );
};