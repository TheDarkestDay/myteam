import { ComponentChildren } from 'preact';
import { Link as PreactLink } from 'preact-router/match';
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
    <PreactLink className={resultClassName} href={href}>
      {children}
    </PreactLink>
  );
};