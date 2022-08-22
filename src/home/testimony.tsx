import classNames from 'classnames';

type Props = {
  author: string;
  role: string;
  text: string;
  avatar: string;
  className?: string;
};

const quoteGraphicsClassName = `
  relative pt-9
  before:absolute before:w-full before:h-14
  before:bg-icon-quote before:bg-center before:bg-no-repeat
  before:top-0
`;

export const Testimony = ({author, role, text, avatar, className}: Props) => {
  const rootClassName = classNames(
    quoteGraphicsClassName,
    className,
  );

  return (
    <div className={rootClassName}>
      <figure className="mb-8 text-center relative z-20">
        <blockquote className="mb-6 text-white">
          {text}
        </blockquote>
        <figcaption>
          <p className="text-secondaryBlue font-bold text-lg">
            {author}
          </p>
          <p className="text-white text-xs italic">
            {role}
          </p>
        </figcaption>
      </figure>

      <img width="66" height="66" className="mx-auto" src={avatar} alt={`Photo of ${author}`} />
    </div>
  );
};