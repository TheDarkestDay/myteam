import { useState, useEffect } from 'preact/hooks';


export const useCurrentHref = () => {
  const [href, setHref] = useState('');

  useEffect(() => {
    const handleHrefChange = () => {
      console.log('POPPED STATE');
      setHref(window.location.href);
    };

    window.addEventListener('popstate', handleHrefChange);

    return () => window.removeEventListener('popstate', handleHrefChange);
  }, [setHref]);

  return href;
};