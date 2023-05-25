import { useState } from "react";
import { Button, RangeDatePicker } from "@ui";

import styles from "./SetGroupProfileDate.module.css";

export const SetGroupProfileDate = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  return (
    <div className={styles.container}>
      <RangeDatePicker
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startDate={startDate}
        endDate={endDate}
      />
      <Button
        name="Применить"
        textColor="white"
        bgColor="#6dbae5"
        onClick={() => {}}
      />
    </div>
  );
};
