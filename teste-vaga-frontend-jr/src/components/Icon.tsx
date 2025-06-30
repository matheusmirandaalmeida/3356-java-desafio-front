import ShieldCheckIcon from './icons/ShieldCheckIcon';
import TruckIcon from './icons/TruckIcon';
import CardIcon from './icons/CardIcon';
import MagnifyglassIcon from './icons/MagnifyglassIcon';
import CartIcon from './icons/CartIcon';
import UserIcon from './icons/UserIcon';
import HeartIcon from './icons/HeartIcon';
import GroupIcon from './icons/GroupIcon';

type IconName = 'shield' | 'truck' | 'card' | 'group' | 'magnifyglass' | 'cart' | 'user' | 'heart';

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
