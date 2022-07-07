import { Frame } from '../common';
import { MemberCard } from './member-card';

export const Team = () => {
  return (
    <section className="bg-secondaryDeepGreen">
      <Frame size="lg">
        <h2 className="text-white font-bold text-5xl text-center mb-16">
          Meet the directors
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-12">
          <MemberCard name="Nikita Marks" role="Founder and CEO" photo="/src/assets/nmarks-photo.png" quote="" />
          <MemberCard name="Christian Duncan" role="Co-founder and COO" photo="/src/assets/cduncan-photo.png" quote="" />
          <MemberCard name="Cruz Hamer" role="Co-founder and CTO" photo="/src/assets/chamer-photo.png" quote="" />
          <MemberCard name="Drake Heaton" role="Business development lead" photo="/src/assets/dheaton-photo.png" quote="" />
          <MemberCard name="Griffin Wise" role="Lead Marketing" photo="/src/assets/gwise-photo.png" quote="" />
          <MemberCard name="Aden Allan" role="Head of talent" photo="/src/assets/aallan-photo.png" quote="" />
        </div>
      </Frame>
    </section>
  );
};