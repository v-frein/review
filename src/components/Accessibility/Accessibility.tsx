import { Table } from "./Table";

import { Button, DialogWithTitle } from "@ui";

import styles from "./Accessibility.module.css";

const footer = (
  <div className={styles.footer}>
    <Button name="Редактировать" textColor="white" />
  </div>
);

export const Accessibility = () => {
  return (
    <DialogWithTitle name="Доступность" footer={footer}>
      <div>
        <Table />
      </div>
    </DialogWithTitle>
  );
};
