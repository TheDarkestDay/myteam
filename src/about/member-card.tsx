type Props = {
  name: string;
  role: string;
  quote: string; // TODO: Implemented quote card
  photo: string;
};

export const MemberCard = ({name, role, quote, photo}: Props) => {
  return (
    <article className="relative bg-secondaryDarkDecoration px-6 py-8 text-center grow basis-[350px]">
      <img src={photo} alt={`Photo of ${name}`} className="mx-auto mb-4" />
      <p className="text-secondaryBlue text-lg">
        {name}
      </p>
      <p className="text-white text-sm italic mb-7">
        {role}
      </p>
      <button className="transition hover:bg-secondaryBlue rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 font-bold text-2xl bg-primaryLight w-14 h-14" aria-label={`Show quote from ${name}`}>+</button>
    </article>
  );
};