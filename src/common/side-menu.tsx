import { useState, useEffect } from 'preact/hooks';
import classNames from 'classnames';

import { Link } from './link';
import { Button } from './button';
import { IconButton } from './icon-button';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SideMenu = ({open, onClose}: Props) => {
  const [isSlideIn, setIsSlideIn] = useState(false);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldMount(true);
    } else {
      setIsSlideIn(false);
    }
  }, [setShouldMount, setIsSlideIn, open]);

  const bottomGraphicsClassName = 'after:absolute after:w-50 after:h-50 after:bottom-0 after:right-0 after:bg-graphics-side-menu after:bg-no-repeat after:translate-x-1/2';

  const sideMenuClassName = classNames(
    'fixed h-screen right-0 top-0 bg-secondaryDarkBlue transition z-20 p-12',
    isSlideIn ? 'translate-x-0' : 'translate-x-full',
    bottomGraphicsClassName
  );

  const backdropClassName = 'fixed top-0 left-0 h-screen w-screen z-10 bg-secondaryDarkDecoration opacity-50';

  const onMenuRendered = (ref: HTMLElement | null) => {
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
    <>
      <div aria-hidden="true" className={backdropClassName} onClick={onClose}></div>
      <nav ref={onMenuRendered} onTransitionEnd={handleTransitionEnd} className={sideMenuClassName}>
        <div className="text-right">
          <IconButton ariaLabel="Close menu" className="ml-auto mb-10" iconName='close' onClick={onClose} />
        </div>

        <div className="flex flex-col gap-6 mb-9">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>

        <Button className="ml-auto" href="/contact">
          Contact us
        </Button>
      </nav>
    </>
  );
};