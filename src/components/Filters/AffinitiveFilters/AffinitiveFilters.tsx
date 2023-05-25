import {
  Button,
  LabelForElement,
  RangeDatePicker,
  labelPositionOptions,
} from "@ui";

import styles from "./AffinitiveFilters.module.css";

export const AffinitiveFilters = () => {
  return (
    <div className={styles.container}>
      <RangeDatePicker setStartDate={() => {}} setEndDate={() => {}} />
      <LabelForElement name="Статус" labelPosition={labelPositionOptions.TOP}>
        <input />
      </LabelForElement>
      <LabelForElement
        name="Источник данных"
        labelPosition={labelPositionOptions.TOP}
      >
        <input />
      </LabelForElement>
      <LabelForElement
        name="Доступность"
        labelPosition={labelPositionOptions.TOP}
      >
        <input />
      </LabelForElement>
      <LabelForElement name="Тэги" labelPosition={labelPositionOptions.TOP}>
        <input />
      </LabelForElement>
      <LabelForElement name="Охват от" labelPosition={labelPositionOptions.TOP}>
        <input />
      </LabelForElement>
      <LabelForElement name="Охват до" labelPosition={labelPositionOptions.TOP}>
        <input />
      </LabelForElement>
      <LabelForElement name="Поиск" labelPosition={labelPositionOptions.TOP}>
        <input />
      </LabelForElement>
      <LabelForElement
        name="Айдишники через запятую"
        labelPosition={labelPositionOptions.TOP}
      >
        <input />
      </LabelForElement>
      <div>
        <Button name="Применить" bgColor="#6dbae5" textColor="white" />
      </div>
    </div>
  );
};
