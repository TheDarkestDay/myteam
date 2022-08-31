import { ComponentChildren } from 'preact';
import { MutableRef, useEffect, useRef, useState } from 'preact/hooks';

type Props = {
  children: ComponentChildren
  initialFocusTo?: MutableRef<HTMLElement | null>;
  className?: string;
};

type KeyboardNavigationDirection = 'forward' | 'backward';

const FOCUSABLE_ELEMENTS_SELECTOR = 'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"]';

export const FocusTrap = ({children, className, initialFocusTo}: Props) => {
  const [keyboardNavigationDirection, setKeyboardNavigationDirection] = useState<KeyboardNavigationDirection>('forward');
  const [elementFocusedBeforeTrap, setElementFocusedBeforeTrap] = useState<HTMLElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rootElement = rootRef.current;
    if (rootElement == null) {
      return;
    }

    setElementFocusedBeforeTrap(document.activeElement as HTMLElement);

    if (initialFocusTo) {
      initialFocusTo.current?.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setKeyboardNavigationDirection(event.shiftKey ? 'backward' : 'forward');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setElementFocusedBeforeTrap, setKeyboardNavigationDirection]);

  useEffect(() => {
    const rootElement = rootRef.current;
    if (rootElement == null) {
      return;
    }

    const [ head, ...rest] = [...rootElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)] as Array<HTMLElement>;
    const tail = rest[rest.length - 1];

    const handleFocusIn = (event: FocusEvent) => {
      const nodeToReceiveFocus = event.target as HTMLElement;

      if (!rootElement.contains(nodeToReceiveFocus)) {
        if (keyboardNavigationDirection === 'forward') {
          head.focus();
        } else {
          tail.focus();
        }
      }
    };

    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [keyboardNavigationDirection]);

  useEffect(() => {
    return () => {
      if (elementFocusedBeforeTrap) {
        elementFocusedBeforeTrap.focus();
      }
    };
  }, [elementFocusedBeforeTrap]);

  return (
    <div className={className} ref={rootRef}>
      {children}
    </div>
  );
};