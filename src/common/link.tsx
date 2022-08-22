import { ComponentChildren } from 'preact';
import { forwardRef, useImperativeHandle } from 'preact/compat';
import { Link as ReactRouterLink } from 'react-router-dom';
import classNames from 'classnames';
import { MutableRef, useRef } from 'preact/hooks';

type Props = {
  className?: string;
  href?: string;
  children: ComponentChildren;
};

export type LinkRef = {
  focus(): void;
};

const _Link = ({children, className, href}: Props, ref: MutableRef<LinkRef | null>) => {
  const ownRef = useRef<HTMLAnchorElement | null>();

  useImperativeHandle(ref, () => ({
    focus() {
      ownRef.current?.focus();
    },
  }));

  const ownClassName = 'text-white lowercase hover:underline';
  const resultClassName = classNames(ownClassName, className);

  return (
    <ReactRouterLink ref={ownRef} className={resultClassName} to={href}>
      {children}
    </ReactRouterLink>
  );
};

export const Link = forwardRef<LinkRef, Props>(_Link);
