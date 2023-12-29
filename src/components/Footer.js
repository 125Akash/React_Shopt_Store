import styles from "styles/Footer.module.scss";
import GetIcon from "components/GetIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <GetIcon icon="BsFillHeartFill" size={22} color="#da0037" /> <a href="https://github.com/125Akash">Akash Sabe</a>
      </p>
    </footer>
  );
};

export default Footer;
