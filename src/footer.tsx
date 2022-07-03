import { Frame, Logo, Link } from './common';

export const Footer = () => {
  return (
    <footer className="bg-secondaryDarkText">
      <Frame className="flex">
        <div>
          <Logo className="mb-5" />

          <nav>
            <Link className="mr-10" href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
          </nav>
        </div>

        <address className="text-white opacity-60 ml-28 w-48">
          987  Hillcrest Lane <br />
          Irvine, CA
          California 92714
          Call Us : 949-833-7432
        </address>

        <div className="flex flex-col justify-between ml-auto">
          <nav className="flex gap-4 justify-end items-center">
            <Link href="#">
              <img src="/src/assets/facebook-logo.svg" alt="Visit our Facebook page" />
            </Link>
            <Link href="#">
              <img src="/src/assets/pinterest-logo.svg" alt="Visit our Pinterest page" />
            </Link>
            <Link href="#">
              <img src="/src/assets/twitter-logo.svg" alt="Visit our Twitter page" />
            </Link>
          </nav>

          <p className="text-white opacity-60">
            Copyright 2022. All Rights Reserved
          </p>
        </div>
      </Frame>
    </footer>
  );
};