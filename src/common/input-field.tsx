import classNames from 'classnames';
import { useRef, useState } from 'preact/hooks';

type Props = {
  name: string;
  className?: string;
  label: string;
  type?: string;
};

export const InputField = ({name, label, type = 'text', className}: Props) => {
  const [shouldElevateLabel, setShouldElevateLabel] = useState(false);

  const fieldRef = useRef<HTMLInputElement | null>(null);

  const rootClassName = classNames(
    className,
  );

  const handleFieldFocus = () => {
    setShouldElevateLabel(true);
  };

  const handleFieldBlur = () => {
    const field = fieldRef.current;

    if (field && field.value === '') {
      setShouldElevateLabel(false);
    }
  };

  const labelClassName = classNames(
    'block text-white text-sm font-semibold opacity-60 transition origin-top-left translate-y-4',
    shouldElevateLabel && 'translate-y-0',
  );

  return (
    <p className={rootClassName}>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>

      <input ref={fieldRef} 
        className="w-full bg-transparent border-b border-white text-white" 
        onFocus={handleFieldFocus}
        onBlur={handleFieldBlur}
        id={name} 
        name={name} 
        type={type} />
    </p>
  );
};