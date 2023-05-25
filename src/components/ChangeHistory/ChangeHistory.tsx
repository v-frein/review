import { Table } from "./Table";

import { DialogWithTitle } from "@ui";

import styles from "./ChangeHistory.module.css";
import { Link } from "react-router-dom";

const footer = (
  <div className={styles.footer}>
    <Link to="/changehistory">Вся история →</Link>
  </div>
);

export const ChangeHistory = () => {
  return (
    <DialogWithTitle name="История изменений" footer={footer}>
      <div>
        <Table />
      </div>
    </DialogWithTitle>
  );
};
