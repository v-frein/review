import { TagsInput } from "react-tag-input-component";
import { RangeDatePicker, LabelForElement, labelPositionOptions } from "@ui";

import { useState } from "react";
import styles from "./BuildingHistoryFilters.module.css";

export const BuildingHistoryFilters = () => {
  const [selected, setSelected] = useState(["papaya"]);
  return (
    <div className={styles.container}>
      <LabelForElement
        name="Дата события:"
        labelPosition={labelPositionOptions.TOP}
      >
        <RangeDatePicker setStartDate={() => {}} setEndDate={() => {}} />
      </LabelForElement>
      <LabelForElement
        name="Дата данных:"
        labelPosition={labelPositionOptions.TOP}
      >
        <input />
      </LabelForElement>
      <LabelForElement
        name="Сегменты:"
        labelPosition={labelPositionOptions.TOP}
      >
        <TagsInput
          value={selected}
          onChange={setSelected}
          name="fruits"
          placeHolder="enter fruits"
        />
      </LabelForElement>
      <LabelForElement name="Статус:" labelPosition={labelPositionOptions.TOP}>
        <select name="tags" id="tags" size={4}>
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
    </div>
  );
};
