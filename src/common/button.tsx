import { ComponentChildren } from 'preact';
import { Link } from 'preact-router/match';
import classNames from 'classnames';

type Props = {
  className?: string;
  children: ComponentChildren;
  href?: string;
};

export const Button = ({className, children, href}: Props) => {
  const commonClassName = classNames(
    'text-white', 
    'lowercase', 
    'rounded-full', 
    'border-white', 
    'border-solid', 
    'border-2',
    'px-8',
    'py-3',
    'hover:bg-white',
    'hover:text-secondaryDarkText',
    'transition-colors',
     className
  );

  if (href != null) {
    return <Link className={commonClassName} href={href}>{children}</Link>;
  }

  return <button className={commonClassName}>{children}</button>;
};