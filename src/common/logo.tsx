type Props = {
  className?: string;
}

export const Logo = ({className}: Props) => {
  return (
    <img className={className} src="/src/assets/logo.svg" alt="Myteam logo" />
  );
};