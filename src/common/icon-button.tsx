import classNames from 'classnames';

type IconName = 'menu' | 'close';

type Props = {
  className?: string;
  ariaLabel?: string;
  iconName: IconName;
  onClick: () => void;
};

const getIconClassName = (name: IconName) => {
  switch (name) {
    case 'menu':
      return 'bg-icon-menu';
    case 'close':
      return 'bg-icon-close';
    default:
      return '';
  }
};

export const IconButton = ({className, ariaLabel, onClick, iconName}: Props) => {
  const iconBgClassName = getIconClassName(iconName);
  const rootClassName = classNames(
    'bg-transparent bg-no-repeat w-5 h-4',
    iconBgClassName, 
    className
  );

  return (
    <button aria-label={ariaLabel} type="button" className={rootClassName} onClick={onClick}>

    </button>
  );
};