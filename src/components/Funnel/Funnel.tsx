import { useState } from "react";
import Select from "react-select";
import { ColumnContainer } from "../../layouts/ColumnContainer";
import { RowContainer } from "../../layouts/RowContainer";
import { RangeDatePicker } from "../../ui/RangeDatePicker";
import {
  LabelForElement,
  labelPositionOptions,
} from "../../ui/LabelForElement";
import { Button, DialogWithTitle } from "@ui";
import styles from "./Funnel.module.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Funnel = () => {
  const [startDate, setStartDate] = useState(new Date("7.12.2022"));
  const [endDate, setEndDate] = useState(new Date("07.18.2022"));

  return (
    <div>
      <RowContainer>
        <ColumnContainer width="30%">
          <DialogWithTitle name="Параметры">
            <div className={styles.funnelPickerContainer}>
              <RangeDatePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
              <LabelForElement
                name="Сегмент Б"
                labelPosition={labelPositionOptions.TOP}
              >
                <Select options={options} />
              </LabelForElement>
              <Button name="Применить" textColor="white" />
            </div>
          </DialogWithTitle>
        </ColumnContainer>
        <ColumnContainer width="70%"></ColumnContainer>
      </RowContainer>
    </div>
  );
};
