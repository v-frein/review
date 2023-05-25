import { ParameterWithDescription } from "@ui";
import { Table } from "./Table";

import styles from "./GroupProfile.module.css";

interface GroupProfileProps {
  name: string;
}

export const GroupProfile = ({ name }: GroupProfileProps) => {
  return (
    <div>
      <p className={styles.heading}>{name}</p>
      <div className={styles.coverageInfoContainer}>
        <ParameterWithDescription
          nameWidth="146px"
          name="Размер группы"
          description="Тест"
        />
        <ParameterWithDescription
          nameWidth="146px"
          name="Размер пересечения"
          description="Тест"
        />
      </div>
      <Table />
    </div>
  );
};
