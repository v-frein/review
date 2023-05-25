import styles from "./SegmentNavigation.module.css";

export const SegmentNavigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.heading}>Мета-информация</p>
        <ul className={styles.controlsContainer}>
          <li>Последние события</li>
          <li>Сегменты</li>
          <li>Модели</li>
          <li>Аудитории</li>
          <li>Правила</li>
          <li>Dendy</li>
        </ul>
      </div>
      <div>
        <p className={styles.heading}>Данные</p>
        <ul className={styles.controlsContainer}>
          <li>Сегменты</li>
          <li>Модели</li>
        </ul>
      </div>
    </div>
  );
};
