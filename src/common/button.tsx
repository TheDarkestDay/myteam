import { ComponentChildren } from 'preact';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  theme?: 'dark' | 'light';
  className?: string;
  children?: ComponentChildren;
  href?: string;
};

const baseClassName = classNames(
  'lowercase', 
  'rounded-full', 
  'border-solid', 
  'border-2',
  'px-8',
  'py-3',
  'transition-colors',
);

const darkClassName = classNames(
  baseClassName,
  'border-white',
  'text-white',
  'hover:bg-white',
  'hover:text-secondaryDarkText'
);

const lightClassName = classNames(
  baseClassName,
  'border-secondaryDarkDecoration',
  'text-secondaryDarkDecoration',
  'hover:bg-secondaryDarkDecoration',
  'hover:text-white'
);

export const Button = ({className, children, href, theme = 'dark'}: Props) => {
  const resultClassName = classNames(
    theme === 'dark' ? darkClassName : lightClassName,
    className
  );

  if (href != null) {
    return <Link className={resultClassName} to={href}>{children}</Link>;
  }

  return <button className={resultClassName}>{children}</button>;
};