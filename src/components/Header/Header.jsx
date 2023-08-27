import styles from "./Header.module.css";
import "../../App.css";
import { GiShoppingBag } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const refScroll = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    refScroll.current = document.getElementById("refScroll");
  });

  const handleScroll = () => {
    navigate("/");
    refScroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  const products = useSelector((state) => state.products.products);
  const [activeShoppingCart, setActiveShoppingCart] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          ZipUp
        </div>
        <NavLink to={"order"} className={styles["order-avalible"]}>
          Заказать
        </NavLink>
        <div className={styles["order-avalible"]} onClick={handleScroll}>
          В наличии
        </div>
        <div className={styles["basket-container"]}>
          <div className={styles.basketFake}>
            <GiShoppingBag
              className={styles.basket}
              onClick={() => setActiveShoppingCart(true)}
            />
            <span
              className={styles.count}
              onClick={() => setActiveShoppingCart(true)}
            >
              {products.length === 0 ? null : products.length}
            </span>
          </div>
        </div>
      </div>
      <ShoppingCart
        active={activeShoppingCart}
        setActive={setActiveShoppingCart}
      />
    </header>
  );
};

export default Header;
