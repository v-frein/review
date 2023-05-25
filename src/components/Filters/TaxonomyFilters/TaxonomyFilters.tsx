import Select from "react-select";

import { Button, LabelForElement, labelPositionOptions } from "@ui";

import styles from "./TaxonomyFilters.module.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const TaxonomyFilters = () => {
  return (
    <>
      <div className={styles.container}>
        <LabelForElement name="Статус" labelPosition={labelPositionOptions.TOP}>
          <Select options={options} />
        </LabelForElement>
        <LabelForElement
          name="Доступность"
          labelPosition={labelPositionOptions.TOP}
        >
          <Select options={options} />
        </LabelForElement>
        <LabelForElement name="Тэги" labelPosition={labelPositionOptions.TOP}>
          <select
            name="tags"
            id="tags"
            size={4}
            className={styles.selectWithoutDropdown}
          >
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="golang">Golang</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
        </LabelForElement>
        <LabelForElement
          name="Источник данных"
          labelPosition={labelPositionOptions.TOP}
        >
          <Select options={options} />
        </LabelForElement>
        <LabelForElement
          name="Охват за неделю"
          labelPosition={labelPositionOptions.TOP}
        >
          <div className={styles.coverageContainer}>
            <input />
            <input />
          </div>
        </LabelForElement>
      </div>
      <div className={styles.controlsContainer}>
        <a href="/">Сбросить</a>
        <Button name="Применить" textColor="white" />
      </div>
    </>
  );
};
