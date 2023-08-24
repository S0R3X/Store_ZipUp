import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.imgContainer}>
        <img
          src="../../../public/img/sneaker.jpg"
          alt="товар"
          className={styles.img}
        />
      </div>
      <p className={styles.price}>100$</p>
      <p className={styles.name}>Nike ari force 1</p>
    </div>
  );
};

export default Product;
