import styles from "./RowContainer.module.css";

interface RowContainerProps {
  children: React.ReactNode;
}

export const RowContainer = ({ children }: RowContainerProps) => {
  return <div className={styles.layout}>{children}</div>;
};
