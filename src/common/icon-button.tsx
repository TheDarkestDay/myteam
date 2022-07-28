import classNames from 'classnames';

type IconName = 'menu';

type Props = {
  className?: string;
  iconName: 'menu';
  onClick: () => void;
};

const getIconClassName = (name: IconName) => {
  switch (name) {
    case 'menu':
      return 'bg-icon-menu';
    default:
      return '';
  }
};

export const IconButton = ({className, onClick, iconName}: Props) => {
  const iconBgClassName = getIconClassName(iconName);
  const rootClassName = classNames(
    'bg-transparent bg-no-repeat w-5 h-4',
    iconBgClassName, 
    className
  );

  return (
    <button aria-label="Open menu" type="button" className={rootClassName} onClick={onClick}>

    </button>
  );
};