import { useEffect, useState } from 'preact/hooks';
import { useLocation } from 'react-router-dom';

import { Button, Frame, Logo, Link, IconButton, useMediaQuery, SideMenu } from './common';

export const Header = () => {
  const {pathname} = useLocation();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const isTablet = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [pathname, setIsSideMenuOpen]);

  useEffect(() => {
    if (isTablet) {
      setIsSideMenuOpen(false);
    }
  }, [setIsSideMenuOpen, isTablet]);

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
          <Link href="">Home</Link>
          <Link href="about">About</Link>

          <Button className="ml-auto" href="contact">
            Contact us
          </Button>
        </nav>

        <IconButton ariaExpanded={isSideMenuOpen} ariaHaspopup="menu" ariaLabel="Open menu" onClick={handleMenuButtonClick} iconName="menu" className="md:hidden ml-auto bg-icon-menu" />
      </header>

      <SideMenu open={isSideMenuOpen} onClose={handleCloseMenuButtonClick} />
    </Frame>
  );
};