import { useEffect, useState } from 'preact/hooks';
import classNames from 'classnames';

import { Button, Frame, Logo, Link, IconButton, useMediaQuery } from './common';
import { useRouter } from 'preact-router';

export const Header = () => {
  const [routeUpdate] = useRouter();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const isTablet = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [routeUpdate.path, setIsSideMenuOpen]);

  useEffect(() => {
    if (isTablet) {
      setIsSideMenuOpen(false);
    }
  }, [setIsSideMenuOpen, isTablet]);

  const sideMenuClassName = classNames(
    'fixed h-screen top-0 right-0 bg-secondaryDarkBlue transition z-10 p-12',
    isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
  );

  const handleMenuButtonClick = () => {
    setIsSideMenuOpen(true);
  };

  const handleCloseMenuButtonClick = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <Frame className="bg-primaryDark">
      <header className="flex items-center">
        <Logo />

        <nav className="hidden md:flex grow ml-12 lg:ml-20 items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          <Button className="ml-auto" href="/contact">
            Contact us
          </Button>
        </nav>

        <IconButton ariaLabel="Open menu" onClick={handleMenuButtonClick} iconName="menu" className="md:hidden ml-auto bg-icon-menu" />
      </header>

      <nav className={sideMenuClassName}>
        <div className="text-right">
          <IconButton ariaLabel="Close menu" className="ml-auto mb-10" iconName='close' onClick={handleCloseMenuButtonClick} />
        </div>

        <div className="flex flex-col gap-6 mb-9">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>

        <Button className="ml-auto" href="/contact">
          Contact us
        </Button>
      </nav>
    </Frame>
  );
};