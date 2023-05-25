import { Tag } from "@ui";

import styles from "./SegmentName.module.css";

interface SegmentNameProps {
  name: string;
}

export const SegmentName = ({ name }: SegmentNameProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Сегмент « {name} »</p>
      <Tag name="Альфа" />
    </div>
  );
};
