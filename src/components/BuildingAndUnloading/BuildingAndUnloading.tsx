import { DialogWithTitle, ParameterWithDescription } from "@ui";

import styles from "./BuildingAndUnloading.module.css";

export const BuildingAndUnloading = () => {
  return (
    <DialogWithTitle
      name="Построение и выгрузка"
      bgColor="#a18a18"
      color="white"
    >
      <div className={styles.BuildingAndUnloadingBlock}>
        <ParameterWithDescription
          nameWidth="151px"
          name="Онлайн-Сегмент"
          description=<p>Да</p>
        />
        <ParameterWithDescription
          nameWidth="151px"
          name="Правила"
          description={
            <div>
              <p>
                Таблица:
                {
                  <span className={styles.tableName}>
                    default.top100_sessions
                  </span>
                }
              </p>

              <div className={styles.tableRules}>
                <p>title contains "ипотек"</p>
                <p>or url contains "ipotek"</p>
                <p>or url contains "mortgage"</p>
              </div>
            </div>
          }
        />
        <ParameterWithDescription
          nameWidth="151px"
          name="Aerospike"
          description="Выгружается"
        />
        <ParameterWithDescription
          nameWidth="151px"
          name="Последняя нарезка"
          description="-"
        />
        <ParameterWithDescription
          nameWidth="151px"
          name="Последняя выгрузка"
          description="-"
        />
      </div>
    </DialogWithTitle>
  );
};
