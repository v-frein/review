import styles from "./ButtonWithIcon.module.css";

interface ButtonWithIconProps {
  name?: string;
  image: string;
  color?: string;
  bgColor?: string;
}

export const ButtonWithIcon = ({
  name,
  image,
  color,
  bgColor,
}: ButtonWithIconProps) => {
  return (
    <div className={styles.button} style={{ backgroundColor: bgColor }}>
      <img alt="" src={image} />
      {name && <p style={{ color: color }}>{name}</p>}
    </div>
  );
};
