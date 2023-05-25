import { useState } from "react";
import DatePicker from "react-datepicker";

import { Table } from "./Table";

import { DialogWithTitle } from "@ui";

import styles from "./Affinitive.module.css";

export const Affinitive = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DialogWithTitle name="Аффинитивные домены" bgColor="#61a118" color="white">
      <div>
        <div className={styles.datePickerContainer}>
          <p>Дата</p>
          <DatePicker
            showPopperArrow={false}
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </div>
        <hr />
        <div>
          <Table />
        </div>
      </div>
    </DialogWithTitle>
  );
};
