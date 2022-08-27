import classNames from 'classnames';

import { Link } from './link';
import { Button } from './button';
import { IconButton } from './icon-button';
import { SlidePanel } from './slide-panel';
import { FocusTrap } from './focus-trap';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SideMenu = ({open, onClose}: Props) => {
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
        <FocusTrap className="h-full">
          <nav className={sideMenuClassName}>
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
        </FocusTrap>
      </SlidePanel>
    </>
  );
};