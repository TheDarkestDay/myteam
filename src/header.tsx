import { Link } from 'preact-router/match';
import { Button, Frame } from './common';

export const Header = () => {
  return (
    <Frame className="bg-primaryDark">
      <header className="flex">
        <img src="/src/assets/logo.svg" alt="Myteam logo" />

        <nav className="flex grow ml-20 items-center gap-10">
          <Link className="text-white lowercase hover:underline" href="/">Home</Link>
          <Link className="text-white lowercase hover:underline" href="/about">About</Link>

          <Button className="ml-auto" href="/contact">
            Contact us
          </Button>
        </nav>
      </header>
    </Frame>
  );
};