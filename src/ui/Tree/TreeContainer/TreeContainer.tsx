import { useEffect, useRef } from "react";
import arrowIcon from "@assets/images/arrow.png";

import styles from "./TreeContainer.module.css";

interface TreeContainerProps {
  children?: React.ReactNode;
  level: number;
  name: string;
}

export const TreeContainer = ({
  children,
  level,
  name,
}: TreeContainerProps) => {
  const toggleButton = useRef<HTMLImageElement>(null);
  const contentContainer = useRef<HTMLImageElement>(null);
  const contentWrapper = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const containerHeight = contentContainer.current?.clientHeight;
    const contentWrapperHeight = contentWrapper.current?.clientHeight;

    if (toggleButton.current && contentContainer.current) {
      if (containerHeight !== contentWrapperHeight) {
        toggleButton.current.style.transform = "rotate(0deg)";
        contentContainer.current.style.height = `${contentWrapperHeight}px`;
      } else if (containerHeight === contentWrapperHeight) {
        toggleButton.current.style.transform = "";
        contentContainer.current.style.height = "0px";
      }
    }
  };

  useEffect(() => {
    const contentWrapperHeightObserver = new ResizeObserver((elements) => {
      const { height } = elements[0].contentRect;
      if (contentContainer.current && contentContainer.current.clientHeight) {
        contentContainer.current.style.height = `${height}px`;
      }
    });

    if (contentWrapper.current) {
      contentWrapperHeightObserver.observe(contentWrapper.current);
    }
  }, []);

  return (
    <div>
      <div
        className={styles.headerContainer}
        style={{ paddingLeft: `${25 * level}px` }}
      >
        <div className={styles.toggleContainer}>
          <img
            ref={toggleButton}
            className={styles.toggle}
            src={arrowIcon}
            alt="toggle"
            onClick={toggle}
          />
        </div>
        <p>{name}</p>
      </div>
      <div className={styles.contentContainer} ref={contentContainer}>
        <div className={styles.contentWrapper} ref={contentWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
};
