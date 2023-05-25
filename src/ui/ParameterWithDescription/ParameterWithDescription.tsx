import styles from "./ParameterWithDescription.module.css";

interface ParameterWithDescriptionProps {
  name: string;
  description: string | React.ReactNode;
  nameWidth?: string;
  descriptionWidth?: string;
}

export const ParameterWithDescription = ({
  name,
  description,
  nameWidth,
  descriptionWidth,
}: ParameterWithDescriptionProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.parameterName} style={{ width: nameWidth }}>
        {name}
      </p>
      <p style={{ width: descriptionWidth }}>{description}</p>
    </div>
  );
};
