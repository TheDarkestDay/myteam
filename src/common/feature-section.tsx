import classNames from 'classnames';

type Props = {
  title: string;
  titleColor?: 'white' | 'light';
  text?: string;
  className?: string;
  icon: string;
};

const ownClassName = 'flex flex-col md:flex-row items-center';
const iconClassName = `after:block after:w-14 after:h-14 after:absolute after:top-0 after:left-0 after:bg-no-repeat after:bg-center after:-top-3.5 after:-left-3.5`;

const bgIcons: Record<string, string> = {
  people: 'after:bg-icon-people',
  process: 'after:bg-icon-process',
  analytics: 'after:bg-icon-analytics',
};

export const FeatureSection = ({title, text, className, icon, titleColor = 'light'}: Props) => {
  const rootClassName = classNames(ownClassName, className);
  const decorationClassName = classNames(
    'relative shrink-0 w-14 h-14 rounded-full bg-secondaryDarkBlue',
    'mb-4 md:mb-0',
    iconClassName, 
    bgIcons[icon],
  );

  const headingClassName = classNames(
    titleColor === 'light' ? 'text-primaryLight' : 'text-white', 
    'font-bold',
    'text-lg',
    'text-center md:text-left',
    text && 'mb-4',
  );

  return (
    <section className={rootClassName}>
      <div aria-hidden="true" className={decorationClassName}></div>
      <div className="md:ml-6">
        <h3 className={headingClassName}>
          {title}
        </h3>
        {
          text && (
            <p className="text-white text-sm text-center md:text-left">
              {text}
            </p>
          )
        }
      </div>
    </section>
  );
};