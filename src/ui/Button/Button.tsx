import styles from "./Button.module.css";

interface ButtonProps {
  name: string;
  bgColor?: string;
  textColor: string;
  onClick?: () => void;
}

export const Button = ({ name, bgColor, textColor, onClick }: ButtonProps) => {
  return (
    <div
      className={styles.button}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      <p>{name}</p>
    </div>
  );
};
