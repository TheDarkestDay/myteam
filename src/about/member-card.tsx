import classNames from "classnames";
import { useRef, useState } from "preact/hooks";

import twitterLogoUrl from '../assets/twitter-logo.svg';
import linkedInLogoUrl from '../assets/linkedin-logo.svg';
import { Link, SlidePanel } from "../common";

type Props = {
  name: string;
  role: string;
  quote: string;
  photo: string;
  className?: string;
};

export const MemberCard = ({ name, role, quote, className, photo }: Props) => {
  const [shouldShowQuote, setShouldShowQuote] = useState(false);
  const quotePanelRef = useRef<HTMLElement | null>(null);

  const rootClassName = classNames(
    "relative bg-secondaryDarkDecoration px-6 py-8 text-center",
    className
  );

  const panelClassName = `absolute z-20 top-0 left-0 w-full h-full`;

  const quoteCardClassName = classNames(
    `
      px-6 py-8
      bg-secondaryDarkDecoration
    `
  );

  const handleExpandButtonClick = () => {
    setShouldShowQuote(!shouldShowQuote);
  };

  const quoteSectionId = `quote-section-${name}`;

  return (
    <article className={rootClassName}>
      <div className="relative overflow-y-hidden">
        <div className={shouldShowQuote ? `invisible` : 'visible'}>
          <img width="100" height="100" src={photo} alt={`Photo of ${name}`} className="mx-auto mb-4" />
          <p className="text-secondaryBlue font-bold text-lg">{name}</p>
          <p className="text-white text-sm italic mb-7">{role}</p>
        </div>

        <SlidePanel className={panelClassName} direction='up' open={shouldShowQuote} focusOnRender={quotePanelRef}>
          <section id={quoteSectionId} ref={quotePanelRef} className={quoteCardClassName} tabIndex={-1}>
            <figure className="mb-6">
              <figcaption className="text-secondaryBlue text-lg font-bold mb-2">
                {name}
              </figcaption>

              <blockquote className="text-white text-sm">
                {quote}
              </blockquote>
            </figure>

            <nav className="flex justify-center items-center gap-4">
              <Link href="#">
                <img
                  width="24" height="24"
                  src={twitterLogoUrl}
                  alt={`Twitter of ${name}`}
                />
              </Link>
              <Link href="#">
                <img
                  width="24" height="24"
                  src={linkedInLogoUrl}
                  alt={`LinkedIn profile of ${name}`}
                />
              </Link>
            </nav>
          </section>
        </SlidePanel>
      </div>

      <button
        onClick={handleExpandButtonClick}
        className="transition hover:bg-secondaryBlue rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 font-bold text-2xl bg-primaryLight w-14 h-14"
        aria-haspopup="dialog"
        aria-controls={quoteSectionId}
        aria-expanded={shouldShowQuote}
        aria-label={shouldShowQuote ? `Hide quote from ${name}` : `Show quote from ${name}`}
      >
        +
      </button>
    </article>
  );
};
