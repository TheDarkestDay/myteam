import classNames from "classnames";
import { useState } from "preact/hooks";

import twitterLogoUrl from '../assets/twitter-logo.svg';
import linkedInLogoUrl from '../assets/linkedin-logo.svg';
import { Link } from "../common";

type Props = {
  name: string;
  role: string;
  quote: string;
  photo: string;
  className?: string;
};

export const MemberCard = ({ name, role, quote, className, photo }: Props) => {
  const [shouldShowQuote, setShouldShowQuote] = useState(false);

  const rootClassName = classNames(
    "relative bg-secondaryDarkDecoration px-6 py-8 text-center",
    className
  );

  const quoteCardClassName = classNames(
    `
      absolute z-20 top-0 left-0
      w-full h-full px-6 py-8
      bg-secondaryDarkDecoration
      transition
    `,
    shouldShowQuote ? "translate-y-0" : "translate-y-full"
  );

  const handleExpandButtonClick = () => {
    setShouldShowQuote(!shouldShowQuote);
  };

  return (
    <article className={rootClassName}>
      <div className="relative overflow-y-hidden">
        <img src={photo} alt={`Photo of ${name}`} className="mx-auto mb-4" />
        <p className="text-secondaryBlue font-bold text-lg">{name}</p>
        <p className="text-white text-sm italic mb-7">{role}</p>

        <section className={quoteCardClassName}>

          <figure className="mb-6">
            <figcaption className="text-secondaryBlue text-lg font-bold mb-2">
              {name}
            </figcaption>

            <blockquote className="text-white text-sm">
              {quote}
            </blockquote>
          </figure>

          <nav className="flex justify-center gap-4">
            <Link href="#">
              <img
                src={twitterLogoUrl}
                alt={`Twitter of ${name}`}
              />
            </Link>
            <Link href="#">
              <img
                src={linkedInLogoUrl}
                alt={`LinkedIn profile of ${name}`}
              />
            </Link>
          </nav>
        </section>
      </div>

      <button
        onClick={handleExpandButtonClick}
        className="transition hover:bg-secondaryBlue rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 font-bold text-2xl bg-primaryLight w-14 h-14"
        aria-label={`Show quote from ${name}`}
      >
        +
      </button>
    </article>
  );
};
