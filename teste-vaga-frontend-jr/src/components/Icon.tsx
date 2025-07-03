import ShieldCheckIcon from './icons/ShieldCheckIcon';
import TruckIcon from './icons/TruckIcon';
import CardIcon from './icons/CardIcon';
import MagnifyglassIcon from './icons/MagnifyglassIcon';
import CartIcon from './icons/CartIcon';
import UserIcon from './icons/UserIcon';
import HeartIcon from './icons/HeartIcon';
import GroupIcon from './icons/GroupIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import LinkedinIcon from './icons/linkedin';
import CrownIcon from './icons/CrownIcon';

type IconName = 'shield' | 'truck' | 'card' | 'group' | 'magnifyglass' | 'cart' | 'user' | 'heart' | 'facebook' | 'instagram' | 'linkedin' | 'crown';

interface IconProps {
  name: IconName;
  className?: string;
}

const icons: Record<IconName, React.FC<{ className?: string }>> = {
  shield: ShieldCheckIcon,
  truck: TruckIcon,
  card: CardIcon,
  magnifyglass: MagnifyglassIcon,
  cart: CartIcon,
  user: UserIcon,
  heart: HeartIcon,
  group: GroupIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  crown: CrownIcon
};

const Icon: React.FC<IconProps> = ({ name, className = "" }) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado.`);
    return null;
  }
  return <IconComponent className={className} />;
};

export default Icon;
