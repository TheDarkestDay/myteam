import { ComponentChildren } from 'preact';
import classNames from 'classnames';

type FrameSize = 'sm' | 'md' | 'lg';

type Props = {
  className?: string;
  size?: FrameSize;
  children: ComponentChildren
}

const getYGapClassName = (size: FrameSize) => {
  switch (size) {
    case 'lg':
      return 'py-16 md:py-24 lg:py-36';
    case 'md':
      return 'py-16';
    default:
      return 'py-4';
  }
};

export const Frame = ({children, className, size = 'md'}: Props) => {
  const rootClassName = classNames(
    getYGapClassName(size),
    'px-6 md:px-10 lg:px-40',
    className
  );

  return (
    <div className={rootClassName}>
      {children}
    </div>
  );
};