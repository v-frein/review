import {
  DropdownDialog,
  LabelForElement,
  MultiSelect,
  labelPositionOptions,
} from "@ui";

import styles from "./AudienceInterests.module.css";

const options = [
  { value: "inDev1", label: "inDev1" },
  { value: "inDev2", label: "inDev2" },
  { value: "inDev3", label: "inDev3" },
];

export const AudienceInterests = () => {
  return (
    <DropdownDialog name="Интересы аудитории">
      <div className={styles.container}>
        <p className={styles.description}>
          Чем увлекаются ваши потенциальные клиенты? Попробуйте составить
          портрет потребителя на основе его увлечений.
        </p>
        <LabelForElement
          name="Интересы"
          labelPosition={labelPositionOptions.TOP}
        >
          <MultiSelect
            menuPortalTarget={document.querySelector("body")}
            isMulti
            options={options}
          />
        </LabelForElement>
      </div>
    </DropdownDialog>
  );
};
