import { Button, ParameterWithDescription } from "@ui";
import { Table } from "./Table";

import styles from "./AffinitiveTable.module.css";

export const AffinitiveTable = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <ParameterWithDescription
            name="Размер группы"
            description="66,467,456"
          />
          <ParameterWithDescription
            name="Размер пересечения"
            description="361,344"
          />
        </div>
        <Button name="Скачать" bgColor="white" textColor="black" />
      </div>
      <Table />
    </div>
  );
};
