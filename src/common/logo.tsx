import myteamLogoUrl from '../assets/logo.svg';

type Props = {
  className?: string;
}

export const Logo = ({className}: Props) => {
  return (
    <img width="160" height="40" className={className} src={myteamLogoUrl} alt="Myteam logo" />
  );
};