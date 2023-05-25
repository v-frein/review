import { ColumnContainer, RowContainer } from "@layouts";
import styles from "./CoverageBaconSchedule.module.css";
import { Schedule } from "./Schedule";
import { SetPeriod } from "./SetPeriod";
import { Table } from "./Table";
import { useState } from "react";

const data = [
  {
    name: "07.12.2022",
    "HDFS/ruid": 300000,
    "HDFS/gruid": 2400,
    "Bacon/ruid": 70000,
  },
  {
    name: "07.13.2022",
    "HDFS/ruid": 250000,
    "HDFS/gruid": 40000,
    "Bacon/ruid": 60000,
  },
  {
    name: "07.14.2022",
    "HDFS/ruid": 115000,
    "HDFS/gruid": 20000,
    "Bacon/ruid": 50000,
  },
  {
    name: "07.15.2022",
    "HDFS/ruid": 400000,
    "HDFS/gruid": 100000,
    "Bacon/ruid": 70000,
  },
  {
    name: "07.16.2022",
    "HDFS/ruid": 250000,
    "HDFS/gruid": 150000,
    "Bacon/ruid": 100000,
  },
  {
    name: "07.17.2022",
    "HDFS/ruid": 300000,
    "HDFS/gruid": 20000,
    "Bacon/ruid": 80000,
  },
  {
    name: "07.18.2022",
    "HDFS/ruid": 115000,
    "HDFS/gruid": 80000,
    "Bacon/ruid": 100000,
  },
];

export const CoverageBaconSchedule = () => {
  const [startDate, setStartDate] = useState(new Date("7.12.2022"));
  const [endDate, setEndDate] = useState(new Date("07.18.2022"));

  const [filteredData, setFlteredData] = useState(data);

  return (
    <RowContainer>
      <ColumnContainer width="30%">
        <SetPeriod
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          startDate={startDate}
          endDate={endDate}
          setFilteredData={() => {
            setFlteredData(
              data.filter(({ name }) => {
                const date = new Date(name);
                if (date >= startDate && date <= endDate) {
                  return true;
                } else {
                  return false;
                }
              })
            );
          }}
        />
      </ColumnContainer>
      <ColumnContainer width="70%">
        <div className={styles.container}>
          <Schedule
            data={filteredData}
            startDate={startDate}
            endDate={endDate}
          />
          <Table />
        </div>
      </ColumnContainer>
    </RowContainer>
  );
};
