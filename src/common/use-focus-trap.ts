import { useEffect, useState } from 'preact/hooks';

const FOCUSABLE_ELEMENTS_SELECTOR = 'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"]';

export const useFocusTrap = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const allFocusableElements = [...document.body.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)];

    if (rootElement) {
      allFocusableElements.forEach((element) => {
        if (!rootElement.contains(element)) {
          element.setAttribute('tabindex', '-1');
        }
      });
    }

    return () => {
      allFocusableElements.forEach((element) => {
        if (!rootElement?.contains(element)) {
          element.removeAttribute('tabindex');
        }
      });
    };
  } , [rootElement]);

  return {setRootElement};
};