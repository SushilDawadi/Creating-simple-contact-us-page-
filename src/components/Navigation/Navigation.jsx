import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={`container ${styles.Navigation}`}>
        <div className={styles.logo}>
          <img src="/image/logo.png" alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
