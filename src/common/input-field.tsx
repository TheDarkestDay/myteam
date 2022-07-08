import classNames from 'classnames';

type Props = {
  name: string;
  className?: string;
  label: string;
  type?: string;
};

export const InputField = ({name, label, type = 'text', className}: Props) => {
  const rootClassName = classNames(
    className,
  );

  return (
    <p className={rootClassName}>
      <label className="block text-white text-sm font-semibold opacity-60" htmlFor={name}>
        {label}
      </label>

      <input className="bg-transparent w-full" id={name} name={name} type={type} />
    </p>
  );
};