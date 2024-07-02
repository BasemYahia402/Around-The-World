import Logo from "./Logo";
import ThemeSwiticher from "./ThemeSwiticher";

const Header = () => {
  return (
    <header className="mb-6 bg-white shadow md:mb-12 dark:bg-gray-800">
      <div className="container px-5 mx-auto md:px-0">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <ThemeSwiticher />
        </div>
      </div>
    </header>
  );
};

export default Header;
