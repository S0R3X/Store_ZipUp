import styles from "./Footer.module.css";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div
        className={styles.logo}
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
      >
        ZipUp
      </div>
      <div className={styles.map}>
        <YMaps>
          <Map
            defaultState={{
              center: [55.75, 37.57],
              zoom: 9,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            width={"100%"}
          >
            <Placemark
              modules={["geoObject.addon.balloon"]}
              defaultGeometry={[55.75, 37.57]}
              properties={{
                balloonContentBody: "магазин ZipUp",
              }}
            />
          </Map>
        </YMaps>
      </div>
      <div className={styles.info}>
        <ul className={styles.description}>
          <div className={styles.title}>За покупками</div>
          <li>Новинки</li>
          <li>Женщинам</li>
          <li>Мужчинам</li>
        </ul>
        <ul className={styles.description}>
          <div className={styles.title}>Магазин</div>
          <li>О нас</li>
          <li>Доставка и возрват</li>
          <li>Подписаться</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
