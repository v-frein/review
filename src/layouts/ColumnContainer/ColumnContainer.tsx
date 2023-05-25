import styles from "./ColumnContainer.module.css";

interface ColumnContainerProps {
  width?: string;
  children?: React.ReactNode;
}

export const ColumnContainer = ({ width, children }: ColumnContainerProps) => {
  return (
    <div className={styles.container} style={{ width: width }}>
      {children}
    </div>
  );
};
