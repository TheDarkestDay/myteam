import { Routes, Route } from 'react-router-dom';

import { HomePage } from './home/home-page';
import { AboutPage } from './about/about-page';
import { ContactPage } from './contact/contact-page';
import { Layout } from './layout';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}
