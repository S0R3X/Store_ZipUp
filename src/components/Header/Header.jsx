import styles from "./Header.module.css";
import "../../App.css";
import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>ZipUp</div>
        <div className={styles["order-avalible"]}>Под заказ</div>
        <div className={styles["order-avalible"]}>В наличии</div>
        <div className={styles["basket-container"]}>
          <GiShoppingBag className={styles.basket}></GiShoppingBag>
          <span className={styles.count}>0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
