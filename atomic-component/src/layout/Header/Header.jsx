import "./Header.css";
import MainMenu from "./parts/MainMenu";
import SubButtons from "./parts/SubButtons";

function Header() {
  return (
    <header>
      <MainMenu />
      <SubButtons />
    </header>
  );
}

export default Header;
