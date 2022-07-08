import Router from 'preact-router';

import { HomePage } from './home/home-page';
import { AboutPage } from './about/about-page';
import { ContactPage } from './contact/contact-page';
import { Header } from './header';
import { Footer } from './footer';
import { CallToAction } from './call-to-action';
import { useCurrentHref } from './common';

export function App() {
  const href = useCurrentHref();

  console.log('Href is ', href);

  return (
    <>
      <Header />
      <Router>
        <HomePage path="/" />
        <AboutPage path="/about" />
        <ContactPage path="/contact" />
      </Router>
      <CallToAction />
      <Footer />
    </>
  )
}
