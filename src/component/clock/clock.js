import React from "react";
import styles from "./clock.module.scss";
function clock({ hour, minus, second, time, date }) {
  return (
    <div className={styles["clock"]}>
      <div className={styles["clock_main"]}>
        {hour}:{minus}
      </div>
      <div className={styles["clock_side"]}>
        <div className={styles["side_second"]}>{second}</div>
        <div className={styles["side_time"]}>{time}</div>
      </div>
    </div>
  );
}

export default clock;
