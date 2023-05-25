import { ParameterWithDescription, ButtonWithIcon } from "@ui";

import styles from "./SegmentInfo.module.css";

import editIcon from "@assets/images/edit.png";
import closeIcon from "@assets/images/close.svg";
import { Link } from "react-router-dom";

export const SegmentInfo = () => {
  return (
    <div className={styles.container}>
      <ParameterWithDescription
        nameWidth="151px"
        name="ID"
        description="18916"
      />
      <ParameterWithDescription
        nameWidth="151px"
        name="Название"
        description="Ипотека"
      />
      <ParameterWithDescription
        nameWidth="151px"
        descriptionWidth="400px"
        name="Описание"
        description='Содержит всех пользователей, которые проявляют интерес к теме "Ипотека". Собран по url и title.'
      />
      <ParameterWithDescription
        nameWidth="151px"
        name="Комментарий"
        description="ADSDMP-705"
      />
      <ParameterWithDescription
        nameWidth="151px"
        name="Источник данных"
        description=""
      />
      <ParameterWithDescription
        nameWidth="151px"
        name="Мьютекс-группа"
        description="-"
      />
      <ParameterWithDescription
        nameWidth="151px"
        descriptionWidth="400px"
        name="Место в таксономии"
        description="Финансы_2023/Банковский сектор/Первичная таксономия/Финансы/Банковский сектор"
      />
      <div className={styles.buttonContainer}>
        <ButtonWithIcon name="Редактировать правила" image={editIcon} />
        <ButtonWithIcon name="Пересчитать сегмент" image={editIcon} />
        <Link to={"/editsegment"}>
          <ButtonWithIcon name="Редактировать" image={editIcon} />
        </Link>
        <ButtonWithIcon name="Изменить привязку UM" image={editIcon} />
        <ButtonWithIcon name="Скопировать" image={editIcon} />
        <ButtonWithIcon
          name="Удалить"
          image={closeIcon}
          color="white"
          bgColor="#d84d5b"
        />
      </div>
    </div>
  );
};
