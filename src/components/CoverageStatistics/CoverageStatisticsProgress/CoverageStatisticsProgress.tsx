import styles from "./CoverageStatisticsProgress.module.css";

interface CoverageStatisticsProgressProps {
  name: string;
  data: number;
  fillingPercentage: number;
}

export const CoverageStatisticsProgress = ({
  name,
  fillingPercentage,
  data,
}: CoverageStatisticsProgressProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{data}</p>
      <div className={styles.progressContainer}>
        <div
          className={styles.progress}
          style={{ width: `${fillingPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
