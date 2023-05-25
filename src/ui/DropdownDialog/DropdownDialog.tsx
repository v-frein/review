import styles from "./DropdownDialog.module.css";

import arrowIcon from "@assets/images/arrow.png";
import { useEffect, useRef } from "react";

interface DropdownDialogProps {
  name: string;
  children?: React.ReactNode;
}

export const DropdownDialog = ({ name, children }: DropdownDialogProps) => {
  const contentContainer = useRef<HTMLDivElement>(null);
  const contentWrapper = useRef<HTMLDivElement>(null);

  const toggleButton = useRef<HTMLImageElement>(null);

  const dropdownToggle = () => {
    const contentWrapperHeight = contentWrapper.current?.clientHeight;
    const containerHeight = contentContainer.current?.clientHeight;

    if (toggleButton.current && contentContainer.current) {
      if (containerHeight === contentWrapperHeight) {
        contentContainer.current.style.height = "0px";
        toggleButton.current.style.transform = "";
      } else if (containerHeight !== contentWrapperHeight) {
        contentContainer.current.style.height = `${contentWrapperHeight}px`;
        toggleButton.current.style.transform = "rotate(180deg)";
      }
    }
  };

  useEffect(() => {
    const contentWrapperHeightObserver = new ResizeObserver((elements) => {
      const { height } = elements[0].contentRect;
      if (contentContainer.current && contentContainer.current.clientHeight) {
        contentContainer.current.style.height = `${height + 24}px`;
      }
    });

    if (contentWrapper.current) {
      contentWrapperHeightObserver.observe(contentWrapper.current);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer} onClick={dropdownToggle}>
        <p className={styles.dialogName}>{name}</p>
        <img
          className={styles.toggleButton}
          src={arrowIcon}
          alt="toggle"
          ref={toggleButton}
        />
      </div>
      <div className={styles.contentContainer} ref={contentContainer}>
        <div className={styles.contentWrapper} ref={contentWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
};
