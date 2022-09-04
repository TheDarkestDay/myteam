import classNames from 'classnames';
import { useRef, useState } from 'preact/hooks';
import { SingleLineInputField } from './single-line-input-field';
import { MultiLineInputField } from './multi-line-input-field';

export type InputFieldImplRef = {
  getValue(): string;
  getValidity(): ValidityState;
};

type Props = {
  name: string;
  className?: string;
  label: string;
  multiline?: boolean;
  type?: string;
};

type State = {
  shouldElevateLabel: boolean,
  isInvalid: boolean,
  validityState: ValidityState | null,
};

export const InputField = ({name, label, type = 'text', multiline = false, className}: Props) => {
  const [state, setState] = useState<State>({
    shouldElevateLabel: false,
    isInvalid: false,
    validityState: null,
  });

  const { shouldElevateLabel, isInvalid, validityState } = state;

  const fieldRef = useRef<InputFieldImplRef | null>(null);

  const rootClassName = classNames(
    'relative',
    className,
  );

  const handleFieldFocus = () => {
    setState((oldState) => ({...oldState, shouldElevateLabel: true}));
  };

  const handleFieldBlur = () => {
    const field = fieldRef.current;

    if (field && field.getValue() === '') {
      setState((oldState) => ({...oldState, shouldElevateLabel: false}));
    }
  };

  const handleChange = () => {
    if (isInvalid) {
      setState((oldState) => ({...oldState, isInvalid: false}));
    }
  };

  const handleInvalid = () => {
    setState((oldState) => ({...oldState, isInvalid: true, validityState: fieldRef.current!.getValidity()}));
  };

  const labelClassName = classNames(
    'block text-white text-sm font-semibold opacity-60 transition origin-top-left translate-y-4',
    shouldElevateLabel && 'translate-y-0',
    isInvalid && 'text-primaryLight'
  );

  return (
    <p className={rootClassName}>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>

      {
        multiline
        ? <MultiLineInputField
            ref={fieldRef}
            onFocus={handleFieldFocus}
            onBlur={handleFieldBlur}
            onInvalid={handleInvalid}
            onChange={handleChange}
            id={name} 
            name={name} 
            isInvalid={isInvalid} />
        : <SingleLineInputField
            ref={fieldRef}
            onFocus={handleFieldFocus}
            onBlur={handleFieldBlur}
            onInvalid={handleInvalid}
            onChange={handleChange}
            id={name} 
            name={name} 
            isInvalid={isInvalid} 
            type={type} />
      }
      
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