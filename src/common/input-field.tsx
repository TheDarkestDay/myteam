import classNames from 'classnames';
import { useRef, useState } from 'preact/hooks';

type Props = {
  name: string;
  className?: string;
  label: string;
  type?: string;
};

type State = {
  shouldElevateLabel: boolean,
  isInvalid: boolean,
  validityState: ValidityState | null,
};

export const InputField = ({name, label, type = 'text', className}: Props) => {
  const [state, setState] = useState<State>({
    shouldElevateLabel: false,
    isInvalid: false,
    validityState: null,
  });

  const { shouldElevateLabel, isInvalid, validityState } = state;

  const fieldRef = useRef<HTMLInputElement | null>(null);

  const rootClassName = classNames(
    'relative',
    className,
  );

  const handleFieldFocus = () => {
    setState((oldState) => ({...oldState, shouldElevateLabel: true}));
  };

  const handleFieldBlur = () => {
    const field = fieldRef.current;

    if (field && field.value === '') {
      setState((oldState) => ({...oldState, shouldElevateLabel: false}));
    }
  };

  const handleChange = () => {
    if (isInvalid) {
      setState((oldState) => ({...oldState, isInvalid: false}));
    }
  };

  const handleInvalid = () => {
    setState((oldState) => ({...oldState, isInvalid: true, validityState: fieldRef.current!.validity}));
  };

  const labelClassName = classNames(
    'block text-white text-sm font-semibold opacity-60 transition origin-top-left translate-y-4',
    shouldElevateLabel && 'translate-y-0',
    isInvalid && 'text-primaryLight'
  );

  const inputClassName = classNames(
    'w-full bg-transparent border-b border-white text-white',
    isInvalid && 'border-primaryLight'
  );

  return (
    <p className={rootClassName}>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>

      <input ref={fieldRef} 
        className={inputClassName} 
        onFocus={handleFieldFocus}
        onBlur={handleFieldBlur}
        onInvalid={handleInvalid}
        onChange={handleChange}
        id={name} 
        name={name} 
        type={type} />
      
      {
        isInvalid && 
          <span className="absolute left-2 -bottom-2 text-primaryLight text-xs font-bold translate-y-full">
            {getErrorMessageFromValidityState(validityState)}
          </span>
      }
    </p>
  );
};

const getErrorMessageFromValidityState = (validityState: ValidityState | null) => {
  if (validityState === null) {
    return '';
  }

  if (validityState.typeMismatch) {
    return 'Please enter a valid email address';
  }

  if (validityState.valueMissing) {
    return 'This field is required';
  }

  return 'This field is invalid';
};