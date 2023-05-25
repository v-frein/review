import { Table } from "./Table";

import styles from "./BuildingHistoryTable.module.css";

export const BuildingHistoryTable = () => {
  return (
    <div>
      <h1 className={styles.buildingHistoryHeading}>История построения</h1>
      <Table />
    </div>
  );
};
