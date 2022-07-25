import { Button, Frame, Logo, Link } from './common';

export const Header = () => {
  return (
    <Frame className="bg-primaryDark">
      <header className="flex">
        <Logo />

        <nav className="flex grow ml-12 lg:ml-20 items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          <Button className="ml-auto" href="/contact">
            Contact us
          </Button>
        </nav>
      </header>
    </Frame>
  );
};