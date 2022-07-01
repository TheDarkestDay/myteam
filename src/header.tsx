import { Link } from 'preact-router/match';
import { Button } from './common';

export const Header = () => {
  return (
    <header className="bg-primaryDark flex py-4 px-40">
      <img src="/src/assets/logo.svg" alt="Myteam logo" />

      <nav className="flex grow ml-20 items-center gap-10">
        <Link className="text-white lowercase hover:underline" href="/">Home</Link>
        <Link className="text-white lowercase hover:underline" href="/about">About</Link>

        <Button className="ml-auto" href="/contact">
          Contact us
        </Button>
      </nav>
    </header>
  );
};