import TopBar from './TopBar/TopBar';
import MainNav from './MainNav/MainNav';
import PromoBanner from './PromoBanner/PromoBanner';
import CategoriesBar from './CategoriesBar/CategoriesBar';

const Header = () => {
  return (
    <header>
      <TopBar />
      <MainNav />
      <PromoBanner />
      <CategoriesBar />
    </header>
  );
};

export default Header;