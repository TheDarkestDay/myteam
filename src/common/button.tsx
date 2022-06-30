import { ComponentChildren } from 'preact';
import classNames from 'classnames';

type Props = {
  className?: string;
  children: ComponentChildren;
  href?: string;
};

export const Button = ({className, children, href}: Props) => {
  const commonClassName = classNames('text-white', 'lowercase', className);

  if (href != null) {
    return <a className={commonClassName} href={href}>{children}</a>;
  }

  return <button className={commonClassName}>{children}</button>;
};