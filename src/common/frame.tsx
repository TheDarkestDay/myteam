import { ComponentChildren } from 'preact';
import classNames from 'classnames';

type Props = {
  className?: string;
  children: ComponentChildren
}

export const Frame = ({children, className}: Props) => {
  const rootClassName = classNames(
    'py-4',
    'px-40',
    className
  );

  return (
    <div className={rootClassName}>
      {children}
    </div>
  );
};