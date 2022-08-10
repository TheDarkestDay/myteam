import { ComponentChildren } from 'preact';
import { Link as ReactRouterLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  className?: string;
  href?: string;
  children: ComponentChildren;
};

export const Link = ({children, className, href}: Props) => {
  const ownClassName = 'text-white lowercase hover:underline';
  const resultClassName = classNames(ownClassName, className);

  return (
    <ReactRouterLink className={resultClassName} to={href}>
      {children}
    </ReactRouterLink>
  );
};