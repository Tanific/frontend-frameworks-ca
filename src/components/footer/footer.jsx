import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span>&copy; 2024 Tonje Stensen</span>
      </div>
      <div>
        <span>Front-end Frameworks CA for Noroff</span>
      </div>
    </footer>
  );
};

export default Footer;
