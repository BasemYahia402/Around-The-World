import Logo from "./Logo";
import ThemeSwiticher from "./ThemeSwiticher";

const Header = () => {
  return (
    <header className="mb-10 bg-white shadow dark:bg-gray-800">
      <div className="container px-5 mx-auto">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <ThemeSwiticher />
        </div>
      </div>
    </header>
  );
};

export default Header;
