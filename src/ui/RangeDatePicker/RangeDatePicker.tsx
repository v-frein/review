import DatePicker from "react-datepicker";

import styles from "./RangeDatePicker.module.css";

interface RangeDatePickerProps {
  startDate?: Date;
  endDate?: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const RangeDatePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: RangeDatePickerProps) => {
  return (
    <div className={styles.setDateContainer}>
      <div className={styles.datePcikersContainer}>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          wrapperClassName={styles.datePicker}
          showPopperArrow={false}
          dateFormat="dd/MM/yyyy"
        />
        <p className={styles.datePickerSeparator}>по</p>
        <DatePicker
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          wrapperClassName={styles.datePicker}
          showPopperArrow={false}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
};
