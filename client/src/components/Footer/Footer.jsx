import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Banner classValue={"banner footer__logo"} />
        <Button classes={"footer__button"} text="Nuevo video" url={"url"} func={null} />
    </footer>
  );
};

export default Footer;
