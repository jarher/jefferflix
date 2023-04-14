import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Banner classValue={"banner"}/>
      <Button classes={"header__button"} text="Nuevo video" url={"url"} func={null} />
    </header>
  );
};

export default Header;
