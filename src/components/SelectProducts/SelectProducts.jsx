import styles from "./SelectProducts.module.css";

const SelectProducts = () => {
  return (
    <div className={styles.selectProducts}>
      <section className={styles.sectionSelect}>
        <img
          src="../../../public/img/female.jpg"
          alt="Женщины"
          className={styles.img}
        />
        <span className={styles.description}>Товары для женщин</span>
      </section>
      <section className={styles.sectionSelect}>
        <img
          src="../../../public/img/news.jpg"
          alt="Новинки"
          className={styles.img}
        />
        <span className={styles.description}>Новинки</span>
      </section>
      <section className={styles.sectionSelect}>
        <img
          src="../../../public/img/male.jpg"
          alt="Мужчины"
          className={styles.img}
        />
        <span className={styles.description}>Товары для мужчин</span>
      </section>
    </div>
  );
};

export default SelectProducts;
