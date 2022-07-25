import classNames from 'classnames';

type Props = {
  title: string;
  titleColor?: 'white' | 'light';
  text?: string;
  className?: string;
  icon: string;
};

const ownClassName = 'relative flex items-center before:block before:shrink-0 before:w-14 before:h-14 before:rounded-full before:bg-secondaryDarkBlue';
const iconClassName = `after:block after:w-14 after:h-14 after:absolute after:top-0 after:left-0 after:bg-no-repeat after:bg-center`;

const bgIcons: Record<string, string> = {
  people: 'after:bg-icon-people',
  process: 'after:bg-icon-process',
  analytics: 'after:bg-icon-analytics',
};

export const FeatureSection = ({title, text, className, icon, titleColor = 'light'}: Props) => {
  const rootClassName = classNames(ownClassName, iconClassName, bgIcons[icon], className);

  const headingClassName = classNames(
    titleColor === 'light' ? 'text-primaryLight' : 'text-white', 
    'font-bold',
    'text-lg',
    text && 'mb-4',
  );

  return (
    <section className={rootClassName}>
      <div className="ml-6">
        <h3 className={headingClassName}>
          {title}
        </h3>
        {
          text && (
            <p className="text-white">
              {text}
            </p>
          )
        }
      </div>
    </section>
  );
};