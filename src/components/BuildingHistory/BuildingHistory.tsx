import { Table } from "./Table";

import { DialogWithTitle } from "@ui";

import styles from "./BuildingHistory.module.css";
import { Link } from "react-router-dom";

const footer = (
  <div className={styles.footer}>
    <Link to="/buildinghistory">Вся история →</Link>
  </div>
);

export const BuildingHistory = () => {
  return (
    <DialogWithTitle name="История построения" footer={footer}>
      <div>
        <Table />
      </div>
    </DialogWithTitle>
  );
};
