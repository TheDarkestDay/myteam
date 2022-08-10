import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'preact/hooks';

import { Header } from './header';
import { Footer } from './common/footer';
import { CallToAction } from './call-to-action';

export function Layout() {
  const {pathname} = useLocation();
  const [showCallToAction, setShowCallToAction] = useState(true);

  useEffect(() => {
    const isOnContactPage = pathname.includes('contact');

    setShowCallToAction(!isOnContactPage);
  }, [pathname, setShowCallToAction]);

  return (
    <div>
      <Header />
      <Outlet />
      {
        showCallToAction && <CallToAction />
      }
      <Footer />
    </div>
  )
}