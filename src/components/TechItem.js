import * as React from "react";
import * as styles from "./techItem.module.css";

const ICON_SIZE = 150;

const TechItem = ({
  title,
  IconComponent,
  ContentComponent,
  isRight = false,
}) => {
  return (
    <div className={styles.container}>
      <div style={{ width: ICON_SIZE, height: ICON_SIZE }}>
        {isRight || IconComponent}
      </div>
      <div
        style={{
          textAlign: isRight ? "end" : "start",
        }}
        className={styles.textColumn}
      >
        <text className={styles.title}>{title}</text>
        <text className={styles.description}>{ContentComponent}</text>
      </div>
      <div style={{ width: ICON_SIZE, height: ICON_SIZE }}>
        {isRight && IconComponent}
      </div>
    </div>
  );
};

export default TechItem;
