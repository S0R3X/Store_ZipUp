import ShowProducts from "../ShowProducts/ShowProducts";
import SelectProducts from "../SelectProducts/SelectProducts";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <h1 className={styles.title}>ZipUp</h1>
      <h3 className={styles.subTitle}>Погрузись в мир моды</h3>
      <SelectProducts />
      <ShowProducts />
    </main>
  );
};

export default Main;
