import { useEffect, useState } from 'preact/hooks';

const FOCUSABLE_ELEMENTS_SELECTOR = 'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"]';

export const useFocusTrap = () => {
  const [elementFocusedBeforeTrap, setElementFocusedBeforeTrap] = useState<HTMLElement | null>(null);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleFocusIn = (event: FocusEvent) => {
      if (!rootElement) {
        setElementFocusedBeforeTrap(event.target as HTMLElement);
      }
    };

    document.addEventListener('focusin', handleFocusIn);

    return () => document.removeEventListener('focusin', handleFocusIn);
  }, [setElementFocusedBeforeTrap, rootElement]);

  useEffect(() => {
    const allFocusableElements = [...document.body.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)];
    const firstFocusableElementWithinRoot = rootElement?.querySelector(FOCUSABLE_ELEMENTS_SELECTOR) as HTMLElement;

    if (rootElement) {
      allFocusableElements.forEach((element) => {
        if (!rootElement.contains(element)) {
          element.setAttribute('tabindex', '-1');
        }
      });

      firstFocusableElementWithinRoot?.focus();
    } else if (elementFocusedBeforeTrap) {
      elementFocusedBeforeTrap.focus();
    }

    return () => {
      allFocusableElements.forEach((element) => {
        if (!rootElement?.contains(element)) {
          element.removeAttribute('tabindex');
        }
      });
    };
  } , [rootElement, elementFocusedBeforeTrap]);

  return {setRootElement};
};