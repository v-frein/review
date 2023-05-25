import styles from "./TaxonomyControls.module.css";

export const TaxonomyControls = () => {
  return (
    <div className={styles.container}>
      <a href="/">Добавить узел</a>
      <a href="/">Добавить сегмент</a>
      <a href="/">Отчёты и выгрузки</a>
    </div>
  );
};
