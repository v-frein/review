import Select from "react-select";
import { Button, LabelForElement, labelAlignOptions } from "@ui";

import styles from "./EditSegemntForm.module.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const EditSegemntForm = () => {
  return (
    <div>
      <h1 className={styles.heading}>Редактирование сегмента Ипотека</h1>
      <div className={styles.container}>
        <LabelForElement
          name="Название"
          nameWidth="200px"
          labelAlign={labelAlignOptions.RIGHT}
        >
          <input className={styles.formInput} />
        </LabelForElement>
        <LabelForElement
          name="Описание"
          nameWidth="200px"
          labelAlign={labelAlignOptions.RIGHT}
        >
          <textarea className={styles.formInput} />
        </LabelForElement>
        <LabelForElement
          name="Комментарий"
          nameWidth="200px"
          labelAlign={labelAlignOptions.RIGHT}
        >
          <textarea className={styles.formInput} />
        </LabelForElement>
        <LabelForElement
          name="Статус"
          nameWidth="200px"
          labelAlign={labelAlignOptions.RIGHT}
        >
          <Select options={options} className={styles.formInput} />
        </LabelForElement>
        <LabelForElement
          name="Доступность"
          nameWidth="200px"
          labelAlign={labelAlignOptions.RIGHT}
        >
          <select name="tags" id="tags" size={4} className={styles.formInput}>
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
          name="Разделы"
          nameWidth="200px"
          labelAlign={labelAlignOptions.RIGHT}
        >
          <select name="tags" id="tags" size={4} className={styles.formInput}>
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
          name="Мьютекс-группа"
          nameWidth="200px"
          labelAlign={labelAlignOptions.RIGHT}
        >
          <Select options={options} className={styles.formInput} />
        </LabelForElement>
      </div>
      <div className={styles.checkBoxContainer}>
        <LabelForElement name="PIVATE">
          <input type="checkbox" />
        </LabelForElement>
        <LabelForElement name="PREDICTED">
          <input type="checkbox" />
        </LabelForElement>
        <LabelForElement name="Запретить выгрузку в aerospike">
          <input type="checkbox" />
        </LabelForElement>
      </div>
      <div className={styles.controlsContainer}>
        <Button name="Удалить сегмент" bgColor="#d9534d" textColor="white" />
        <div>
          <a href="/">Сбросить изменения</a>
          <Button name="Сохранить" bgColor="#6dbae5" textColor="white" />
        </div>
      </div>
    </div>
  );
};
