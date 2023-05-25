import styles from "./Tag.module.css";

interface TagProps {
  name: string;
}

export const Tag = ({ name }: TagProps) => {
  return <span className={styles.tag}>{name}</span>;
};
