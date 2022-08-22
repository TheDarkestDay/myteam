import { Frame, Logo, Link } from '.';

import twitterLogoUrl from '../assets/twitter-logo.svg';
import facebookLogoUrl from '../assets/facebook-logo.svg';
import pinterestLogoUrl from '../assets/pinterest-logo.svg';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="bg-secondaryDarkText">
      <Frame className="footerGrid">
        <div className="nav">
          <Logo className="mb-5" />

          <nav className="flex">
            <Link href="/">
              Home
            </Link>
            <Link className="ml-auto md:ml-10" href="/about">
              About
            </Link>
          </nav>
        </div>

        <div className="address md:place-self-end lg:place-self-auto">
          <address className="w-48 text-white text-center md:text-right lg:text-left opacity-60">
            987  Hillcrest Lane <br />
            Irvine, CA
            California 92714
            Call Us : 949-833-7432
          </address>
        </div>

        <div className="social lg:place-self-end">
          <nav className="flex items-center gap-4">
            <Link href="#">
              <img width="24" height="24" src={facebookLogoUrl} alt="Visit our Facebook page" />
            </Link>
            <Link href="#">
              <img width="24" height="24" src={pinterestLogoUrl} alt="Visit our Pinterest page" />
            </Link>
            <Link href="#">
              <img width="24" height="24" src={twitterLogoUrl} alt="Visit our Twitter page" />
            </Link>
          </nav>
        </div>

        <p className="copyright text-white md:place-self-end opacity-60">
          Copyright 2022. All Rights Reserved
        </p>
      </Frame>
    </footer>
  );
};