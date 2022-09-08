import classNames from 'classnames';

import theVergeLogoUrl from '../assets/the-verge-logo.svg';
import jakartaPostLogUrl from '../assets/jakarta-post-logo.svg';
import theGuardianLogoUrl from '../assets/the-guardian-logo.svg';
import techRadarLogoUrl from '../assets/techradar-logo.svg';
import gadgetsNowLogoUrl from '../assets/gadgets-now-logo.svg';
import { Frame } from '../common';

export const Clients = () => {
  const graphicsClassName = `
    before:absolute before:top-0 before:left-0
    before:bg-graphics-clients before:bg-no-repeat before:bg-right-bottom md:before:bg-bottom
    before:w-25 md:before:w-50 before:h-25 lg:before:h-50
  `;

  const rootClassName = classNames(
    'relative bg-secondaryDarkDecoration',
    graphicsClassName
  );

  return (
    <section className={rootClassName}>
      <Frame size="lg" className="pt-22">
        <h2 className="text-white text-center text-5xl font-bold mb-16">
          Some of our clients
        </h2>

        <div className="grid justify-items-center md:justify-items-stretch grid-cols-clientsGrid items-center gap-10">
          <img width="165" height="28" src={theVergeLogoUrl} alt="The Verge logo" />
          <img width="184" height="23" src={jakartaPostLogUrl} alt="Jakarta Post logo" />
          <img width="180" height="28" src={theGuardianLogoUrl} alt="The Guardian logo" />
          <img width="165" height="28" src={techRadarLogoUrl} alt="Techradar logo" />
          <img width="98" height="45" src={gadgetsNowLogoUrl} alt="Gadgets Now logo" />
        </div>
      </Frame>
    </section>
  );
};