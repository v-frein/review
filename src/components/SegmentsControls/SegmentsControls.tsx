import styles from "./SegmentsControls.module.css";

export const SegmentsControls = () => {
  return (
    <ul className={styles.controlsContainer}>
      <li>Список сегментов</li>
      <li>Добавить сегмент</li>
      <li>Отчёты и выгрузки</li>
    </ul>
  );
};
