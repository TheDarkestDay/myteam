import Router from 'preact-router';
import { useState } from 'preact/hooks';

import { HomePage } from './home/home-page';
import { AboutPage } from './about/about-page';
import { ContactPage } from './contact/contact-page';
import { Header } from './header';
import { Footer } from './common/footer';
import { CallToAction } from './call-to-action';

export function App() {
  const [showCallToAction, setShowCallToAction] = useState(true);

  const handleRouteChange = () => {
    const currentHref = window.location.href;
    const isOnContactPage = currentHref.includes('contact');

    setShowCallToAction(!isOnContactPage);
  };

  return (
    <>
      <Header />
      <Router onChange={handleRouteChange}>
        <HomePage path="/" />
        <AboutPage path="/about" />
        <ContactPage path="/contact" />
      </Router>
      {
        showCallToAction && <CallToAction />
      }
      <Footer />
    </>
  )
}
