import TopBar from './TopBar/TopBar';
import MainNav from './MainNav/MainNav';
import PromoBanner from './PromoBanner/PromoBanner';
import CategoriesBar from './CategoriesBar/CategoriesBar';
import BlackFridayTag from './BlackFridayTag/BlackFridayTag';

const Header = () => {
  return (
    <header>
      <TopBar />
      <MainNav />
      <PromoBanner />
      <CategoriesBar />
      <BlackFridayTag />
    </header>
  );
};

export default Header;