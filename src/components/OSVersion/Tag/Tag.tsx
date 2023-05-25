import styles from "./Tag.module.css";

interface TagProps {
  name: string;
  onClick?: React.MouseEventHandler;
}

export const Tag = (props: TagProps) => {
  const { name } = props;

  return (
    <div className={styles.container} {...props}>
      {name}
    </div>
  );
};
