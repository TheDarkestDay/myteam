import classNames from 'classnames';

import { Link } from './link';
import { Button } from './button';
import { IconButton } from './icon-button';
import { SlidePanel } from './slide-panel';
import { FocusTrap } from './focus-trap';
import { useEffect, useRef } from 'preact/hooks';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SideMenu = ({open, onClose}: Props) => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleEscKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKeyDown);

    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [onClose]);

  const bottomGraphicsClassName = 'after:absolute after:w-50 after:h-50 after:bottom-0 after:right-0 after:bg-graphics-side-menu after:bg-no-repeat after:translate-x-1/2';

  const panelClassName = 'fixed h-screen right-0 top-0 z-20';

  const sideMenuClassName = classNames(
    'bg-secondaryDarkBlue p-12 h-full',
    bottomGraphicsClassName
  );

  const backdropClassName = 'fixed top-0 left-0 h-screen w-screen z-10 bg-secondaryDarkDecoration opacity-50';

  return (
    <>
      {open && <div aria-hidden="true" className={backdropClassName} onClick={onClose}></div>}
      <SlidePanel className={panelClassName} direction='left' open={open}>
        <FocusTrap className="h-full" initialFocusTo={navRef}>
          <nav id="side-nav" ref={navRef} role="menu" aria-label="Site navigation" tabIndex={-1} className={sideMenuClassName}>
            <div className="text-right">
              <IconButton role="menuitem" ariaLabel="Close menu" className="ml-auto mb-10" iconName='close' onClick={onClose} />
            </div>

            <div className="flex flex-col gap-6 mb-9">
              <Link role="menuitem" href="/">Home</Link>
              <Link role="menuitem" href="/about">About</Link>
            </div>

            <Button role="menuitem" className="ml-auto" href="/contact">
              Contact us
            </Button>
          </nav>
        </FocusTrap>
      </SlidePanel>
    </>
  );
};