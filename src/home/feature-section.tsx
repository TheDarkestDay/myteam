import classNames from 'classnames';

type Props = {
  title: string;
  text: string;
  className?: string;
  icon: string;
};

const ownClassName = 'relative flex items-center before:block before:w-14 before:h-14 before:rounded-full before:bg-secondaryDarkBlue';
const iconClassName = `after:block after:w-14 after:h-14 after:absolute after:top-0 after:left-0 after:bg-no-repeat after:bg-center`;

const bgIcons: Record<string, string> = {
  people: 'after:bg-icon-people',
  process: 'after:bg-icon-process',
  analytics: 'after:bg-icon-analytics',
};

export const FeatureSection = ({title, text, className, icon}: Props) => {
  const rootClassName = classNames(ownClassName, iconClassName, bgIcons[icon], className);

  return (
    <section className={rootClassName}>
      <div className="ml-6">
        <h3 className="text-primaryLight font-bold text-lg mb-4">
          {title}
        </h3>
        <p className="text-white">
          {text}
        </p>
      </div>
    </section>
  );
};