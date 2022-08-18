import { ComponentChildren } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import classNames from 'classnames';

type SlideDirection = 'left' | 'up';

type Props = {
  className?: string;
  children: ComponentChildren;
  direction: SlideDirection;
  open: boolean;
};

const getSlideInTransform = (direction: SlideDirection) => {
  return direction === 'left' ? 'translate-x-0' : 'translate-y-0';
};

const getSlideOutTransform = (direction: SlideDirection) => {
  return direction === 'left' ? 'translate-x-full' : 'translate-y-full';
};

export const SlidePanel = ({ children, className, open, direction}: Props) => {
  const [isSlideIn, setIsSlideIn] = useState(false);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldMount(true);
    } else {
      setIsSlideIn(false);
    }
  }, [setShouldMount, setIsSlideIn, open]);

  const rootClassName = classNames(
    'transition',
    isSlideIn ? getSlideInTransform(direction) : getSlideOutTransform(direction),
    className,
  );

  const onPanelRendered = (ref: HTMLElement | null) => {
    if (ref != null && open) {
      setIsSlideIn(true);

      ref.scrollTo(0, 0);
    }
  };

  const handleTransitionEnd = () => {
    if (!open) {
      setShouldMount(false);
    }
  };

  if (!shouldMount) {
    return null;
  }

  return (
    <div ref={onPanelRendered} onTransitionEnd={handleTransitionEnd} className={rootClassName}>
      {children}
    </div>
  );
};