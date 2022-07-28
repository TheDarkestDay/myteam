import { Button, Frame, Logo, Link, IconButton } from './common';

export const Header = () => {
  const handleMenuButtonClick = () => {

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

        <IconButton onClick={handleMenuButtonClick} iconName="menu" className="md:hidden ml-auto bg-icon-menu" />
      </header>
    </Frame>
  );
};