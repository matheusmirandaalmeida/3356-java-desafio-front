

import ShieldCheckIcon from './icons/ShieldCheckIcon';
import MagnifyglassIcon from './icons/MagnifyglassIcon';
import CardIcon from './icons/CardIcon';
import CartIcon from './icons/CartIcon';
import TruckIcon from './icons/TruckIcon';

type IconName = 'shield' | 'truck' | 'card' | 'magnifyglass' | 'cart';

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
