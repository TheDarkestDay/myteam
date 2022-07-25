type Props = {
  author: string;
  role: string;
  text: string;
  avatar: string;
  className?: string;
};

export const Testimony = ({author, role, text, avatar, className}: Props) => {
  return (
    <div className={className}>
      <figure className="mb-8 text-center">
        <blockquote className="mb-6 text-white bg-icon-tick bg-center bg-no-repeat">
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

      <img className="mx-auto" src={avatar} alt={`Photo of ${author}`} />
    </div>
  );
};