import styles from "./DialogWithTitle.module.css";

interface DialogWithTitleProps {
  name: string;
  children?: React.ReactNode;
  bgColor?: string;
  color?: string;
  footer?: React.ReactNode;
}

export const DialogWithTitle = ({
  name,
  children,
  bgColor,
  color,
  footer,
}: DialogWithTitleProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header} style={{ backgroundColor: bgColor }}>
        <p style={{ color: color }}>{name}</p>
      </div>
      <div className={styles.childrenContainer}>{children}</div>
      {footer && footer}
    </div>
  );
};
