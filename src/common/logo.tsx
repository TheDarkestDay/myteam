import myteamLogoUrl from '../assets/logo.svg';

type Props = {
  className?: string;
}

export const Logo = ({className}: Props) => {
  return (
    <img className={className} src={myteamLogoUrl} alt="Myteam logo" />
  );
};