import classNames from 'classnames';
import { Ref } from 'preact';
import { forwardRef } from 'preact/compat';
import { useImperativeHandle, useRef } from 'preact/hooks';
import { InputFieldImplRef } from './input-field';

type Props = {
  name: string;
  type?: string;
  id: string;
  onFocus: () => void;
  onBlur: () => void;
  onChange: () => void;
  onInvalid: () => void;
  isInvalid: boolean;
};

const _SingleLineInputField = ({name, type = 'text', isInvalid, onFocus, onBlur, onInvalid, onChange}: Props, ref: Ref<InputFieldImplRef>) => {
  const fieldRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return fieldRef.current!.value;
      },
      getValidity() {
        return fieldRef.current!.validity;
      }
    };
  });

  const inputClassName = classNames(
    'w-full bg-transparent border-b border-white text-white',
    isInvalid && 'border-primaryLight'
  );

  return (
    <input ref={fieldRef} 
        className={inputClassName} 
        onFocus={onFocus}
        onBlur={onBlur}
        onInvalid={onInvalid}
        onChange={onChange}
        id={name} 
        name={name} 
        type={type} />
  );
};

export const SingleLineInputField = forwardRef<InputFieldImplRef, Props>(_SingleLineInputField);