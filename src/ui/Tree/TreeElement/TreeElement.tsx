import styles from "./TreeElement.module.css";

interface TreeElementProps {
  level: number;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TreeElement = (props: TreeElementProps) => {
  const { level, name } = props;
  return (
    <div
      className={styles.container}
      style={{ paddingLeft: `${25 * level}px` }}
    >
      <div className={styles.checkboxContainer}>
        <input type="checkbox" {...props} />
      </div>
      <p>{name}</p>
    </div>
  );
};
