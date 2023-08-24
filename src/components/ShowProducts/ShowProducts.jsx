import Product from "../Product/Product";
import styles from "./ShowProducts.module.css";

const ShowProducts = () => {
  return (
    <div className={styles.showProducts}>
      <h2 className={styles.title}>Все товары</h2>
      <section className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  );
};

export default ShowProducts;
