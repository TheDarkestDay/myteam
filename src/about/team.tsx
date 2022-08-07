import classNames from 'classnames';

import { Frame } from '../common';
import { MemberCard } from './member-card';

const dummyQuote = '“Empowered teams create truly amazing products. Set the north star and let them follow it.”';

export const Team = () => {
  const topGraphicsClassName = `
    before:hidden before:md:block
    before:absolute before:top-0 before:left-0
    before:w-25 before:h-50
    before:bg-graphics-members-top before:bg-no-repeat before:bg-left
  `;

  const bottomGraphicsClassName = `
    after:absolute after:bottom-0 after:right-0
    after:w-34.25 after:h-25
    after:bg-graphics-members-bottom after:bg-no-repeat after:bg-left
  `;

  const rootClassName = classNames(
    'relative bg-secondaryDeepGreen',
    topGraphicsClassName,
    bottomGraphicsClassName
  );

  return (
    <section className={rootClassName}>
      <Frame size="lg" className="pb-32 md:pb-28">
        <h2 className="text-white font-bold text-5xl text-center mb-16">
          Meet the directors
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-12">
          <MemberCard className="grow w-full md:w-1/2-gap-8 lg:w-1/3-gap-8" name="Nikita Marks" role="Founder and CEO" photo="/src/assets/nmarks-photo.png" quote={dummyQuote} />
          <MemberCard className="grow w-full md:w-1/2-gap-8 lg:w-1/3-gap-8" name="Christian Duncan" role="Co-founder and COO" photo="/src/assets/cduncan-photo.png" quote={dummyQuote} />
          <MemberCard className="grow w-full md:w-1/2-gap-8 lg:w-1/3-gap-8" name="Cruz Hamer" role="Co-founder and CTO" photo="/src/assets/chamer-photo.png" quote={dummyQuote} />
          <MemberCard className="grow w-full md:w-1/2-gap-8 lg:w-1/3-gap-8" name="Drake Heaton" role="Business development lead" photo="/src/assets/dheaton-photo.png" quote={dummyQuote} />
          <MemberCard className="grow w-full md:w-1/2-gap-8 lg:w-1/3-gap-8" name="Griffin Wise" role="Lead Marketing" photo="/src/assets/gwise-photo.png" quote={dummyQuote} />
          <MemberCard className="grow w-full md:w-1/2-gap-8 lg:w-1/3-gap-8" name="Aden Allan" role="Head of talent" photo="/src/assets/aallan-photo.png" quote={dummyQuote} />
        </div>
      </Frame>
    </section>
  );
};