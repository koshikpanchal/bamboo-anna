import { useTheme } from "../../context/ThemeContext";
import { Navbar } from "../navbar/Navbar";
import "./Header.scss";

const Header = () => {
  const { isDarkMode } = useTheme();

  return (
    <header className={isDarkMode ? "headerDark" : "header"}>
      <Navbar />
    </header>
  );
};

export default Header;
