import styles from "./Tag.module.css";

export const Tag = ({ name }: { name: string }) => {
  return <div className={styles.container}>{name}</div>;
};
