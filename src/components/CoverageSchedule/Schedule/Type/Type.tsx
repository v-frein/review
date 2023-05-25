import styles from "./Type.module.css";

export const Type = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.type}
        style={{
          border: `2px solid rgb(${color})`,
          backgroundColor: `rgba(${color}, 0.2)`,
        }}
      ></div>
      {name}
    </div>
  );
};
