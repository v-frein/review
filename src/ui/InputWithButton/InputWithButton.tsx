import styles from "./InputWithButton.module.css";

interface InputWithButtonProps {
  image: string;
}

export const InputWithButton = ({ image }: InputWithButtonProps) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} />
      <div className={styles.button}>
        <img alt="" src={image} />
      </div>
    </div>
  );
};
