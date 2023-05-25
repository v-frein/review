import { DialogWithTitle, ButtonWithIcon, ParameterWithDescription } from "@ui";

import styles from "./Bindings.module.css";

import editIcon from "@assets/images/edit.png";

export const Bindings = () => {
  return (
    <DialogWithTitle name="Привязки">
      <div className={styles.container}>
        <ButtonWithIcon name="" image={editIcon} />
        <ParameterWithDescription
          name="adfox (single puid)"
          description="963743"
        />
        <ParameterWithDescription
          name="adfox (single puid)"
          description="963743"
        />
      </div>
    </DialogWithTitle>
  );
};
