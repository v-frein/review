import { Button, ParameterWithDescription, RangeDatePicker } from "@ui";

import styles from "./SetPeriod.module.css";

interface SetPeriodProps {
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  setFilteredData: any;
}

export const SetPeriod = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setFilteredData,
}: SetPeriodProps) => {
  return (
    <div className={styles.setPeriodContainer}>
      <div className={styles.infoContainer}>
        <ParameterWithDescription
          name="Охват на наших площадках за 15 дней"
          description="540,544"
          nameWidth="175px"
        />
        <ParameterWithDescription
          name="Охваты ТОП-100"
          description="5,901,859"
          nameWidth="175px"
        />
      </div>
      <div className={styles.setRangeContainer}>
        <RangeDatePicker
          startDate={startDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
        />
        <Button
          name="Применить"
          textColor="white"
          bgColor="#6dbae5"
          onClick={setFilteredData}
        />
      </div>
    </div>
  );
};
