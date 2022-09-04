import classNames from 'classnames';
import { forwardRef } from 'preact/compat';
import { Ref, useImperativeHandle, useRef } from 'preact/hooks';
import { InputFieldImplRef } from './input-field';

type Props = {
  name: string;
  id: string;
  onFocus: () => void;
  onBlur: () => void;
  onChange: () => void;
  onInvalid: () => void;
  isInvalid: boolean;
};

const _MultiLineInputField = ({name, isInvalid, onFocus, onBlur, onChange, onInvalid}: Props, ref: Ref<InputFieldImplRef>) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return textAreaRef.current!.value;
      },
      getValidity() {
        return textAreaRef.current!.validity;
      }
    };
  });

  const inputClassName = classNames(
    'w-full bg-transparent border-b border-white text-white',
    isInvalid && 'border-primaryLight'
  );

  return (
    <textarea ref={textAreaRef} 
        className={inputClassName} 
        onFocus={onFocus}
        onBlur={onBlur}
        onInvalid={onInvalid}
        onChange={onChange}
        id={name} 
        name={name}></textarea>
  );
};

export const MultiLineInputField = forwardRef<InputFieldImplRef, Props>(_MultiLineInputField);