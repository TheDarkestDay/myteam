import Router from 'preact-router';

import { HomePage } from './home/home-page';
import { AboutPage } from './about/about-page';
import { ContactPage } from './contact/contact-page';
import { Header } from './header';
import { Footer } from './footer';

export function App() {
  return (
    <>
      <Header />
      <Router>
        <HomePage path="/" />
        <AboutPage path="/about" />
        <ContactPage path="/contact" />
      </Router>
      <Footer />
    </>
  )
}
