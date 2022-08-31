import classNames from 'classnames';

type IconName = 'menu' | 'close';

type Props = {
  className?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaHaspopup?: string;
  role?: string;
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

export const IconButton = ({className, role, ariaControls, ariaHaspopup, ariaLabel, onClick, ariaExpanded, iconName}: Props) => {
  const iconBgClassName = getIconClassName(iconName);
  const rootClassName = classNames(
    'bg-transparent bg-no-repeat w-5 h-4',
    iconBgClassName, 
    className
  );

  return (
    <button aria-label={ariaLabel} role={role} aria-haspopup={ariaHaspopup} aria-controls={ariaControls} aria-expanded={ariaExpanded} type="button" className={rootClassName} onClick={onClick}>

    </button>
  );
};