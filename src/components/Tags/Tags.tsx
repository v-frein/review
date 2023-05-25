import { Button, DialogWithTitle } from "@ui";

import styles from "./Tags.module.css";

export const Tags = () => {
  return (
    <DialogWithTitle name="Тэги">
      <div className={styles.container}>
        <p>Новый тэг</p>
        <input />
        <Button name="Добавить" bgColor="white" textColor="black" />
      </div>
    </DialogWithTitle>
  );
};
