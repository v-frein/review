import { SetPeriod } from "./SetPeriod";

import styles from "./CoverageSchedule.module.css";
import { Schedule } from "./Schedule";
import { Table } from "./Table";
import { useState } from "react";

const data = [
  {
    name: "07.12.2022",
    "HDFS/ruid": 300000,
    "HDFS/gruid": 2400,
    "Bacon/ruid": 70000,
    "Bacon/gruid": 170000,
    "Bacon/elastic": 25000,
    "Bacon/SSP/elastic": 80000,
  },
  {
    name: "07.13.2022",
    "HDFS/ruid": 250000,
    "HDFS/gruid": 40000,
    "Bacon/ruid": 60000,
    "Bacon/gruid": 100000,
    "Bacon/elastic": 300000,
    "Bacon/SSP/elastic": 10000,
  },
  {
    name: "07.14.2022",
    "HDFS/ruid": 115000,
    "HDFS/gruid": 20000,
    "Bacon/ruid": 50000,
    "Bacon/gruid": 10000,
    "Bacon/elastic": 25000,
    "Bacon/SSP/elastic": 80000,
  },
  {
    name: "07.15.2022",
    "HDFS/ruid": 400000,
    "HDFS/gruid": 100000,
    "Bacon/ruid": 70000,
    "Bacon/gruid": 20000,
    "Bacon/elastic": 140000,
    "Bacon/SSP/elastic": 20000,
  },
  {
    name: "07.16.2022",
    "HDFS/ruid": 250000,
    "HDFS/gruid": 150000,
    "Bacon/ruid": 100000,
    "Bacon/gruid": 70000,
    "Bacon/elastic": 25000,
    "Bacon/SSP/elastic": 80000,
  },
  {
    name: "07.17.2022",
    "HDFS/ruid": 300000,
    "HDFS/gruid": 20000,
    "Bacon/ruid": 80000,
    "Bacon/gruid": 40000,
    "Bacon/elastic": 400000,
    "Bacon/SSP/elastic": 400000,
  },
  {
    name: "07.18.2022",
    "HDFS/ruid": 115000,
    "HDFS/gruid": 80000,
    "Bacon/ruid": 100000,
    "Bacon/gruid": 70000,
    "Bacon/elastic": 25000,
    "Bacon/SSP/elastic": 80000,
  },
];

export const CoverageSchedule = () => {
  const [startDate, setStartDate] = useState(new Date("7.12.2022"));
  const [endDate, setEndDate] = useState(new Date("07.18.2022"));

  const [filteredData, setFlteredData] = useState(data);

  return (
    <div className={styles.container}>
      <SetPeriod
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
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
      <Schedule data={filteredData} startDate={startDate} endDate={endDate} />
      <Table />
    </div>
  );
};
