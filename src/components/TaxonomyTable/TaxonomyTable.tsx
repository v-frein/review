import { ButtonWithIcon } from "@ui";

import styles from "./TaxonomyTable.module.css";

import editIcon from "@assets/images/edit.png";
import closeIcon from "@assets/images/close.svg";
import plusIcon from "@assets/images/plus.svg";

export const TaxonomyTable = () => {
  return (
    <div>
      <h1 className={styles.taxonomyHeading}>Таксономия</h1>
      <table>
        <tr>
          <td>Название</td>
          <td>Статус</td>
          <td>Источник</td>
          <td>Мета-узел</td>
          <td></td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={plusIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={plusIcon} />
            <ButtonWithIcon name="Раздел" image={plusIcon} />
            <ButtonWithIcon image={editIcon} />
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={plusIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={plusIcon} />
            <ButtonWithIcon name="Раздел" image={plusIcon} />
            <ButtonWithIcon image={editIcon} />
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={plusIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={plusIcon} />
            <ButtonWithIcon name="Раздел" image={plusIcon} />
            <ButtonWithIcon image={editIcon} />
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={plusIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={plusIcon} />
            <ButtonWithIcon name="Раздел" image={plusIcon} />
            <ButtonWithIcon image={editIcon} />
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={plusIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={plusIcon} />
            <ButtonWithIcon name="Раздел" image={plusIcon} />
            <ButtonWithIcon image={editIcon} />
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={plusIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={plusIcon} />
            <ButtonWithIcon name="Раздел" image={plusIcon} />
            <ButtonWithIcon image={editIcon} />
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={plusIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={plusIcon} />
            <ButtonWithIcon name="Раздел" image={plusIcon} />
            <ButtonWithIcon image={editIcon} />
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td className={styles.nameContainer}>
            <img alt="edit" src={plusIcon} />
            Пол
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className={styles.buttonsContainers}>
            <ButtonWithIcon name="Сегмент" image={plusIcon} />
            <ButtonWithIcon name="Раздел" image={plusIcon} />
            <ButtonWithIcon image={editIcon} />
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
      </table>
    </div>
  );
};
