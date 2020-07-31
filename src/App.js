import React, { useState } from "react";
import styles from "./App.module.scss";
import Clock from "./component/clock/clock";
import Date from "./component/date/date";
import timezone from "moment-timezone";
function App() {
  const [time, setTime] = useState(["--", "--", "--", "--"]);
  const [date, setDate] = useState("");
  const updateClock = () => {
    //let torontoTime = timezonemoment.format("hh mm ss A");
    let saigonTime = timezone.tz("Asia/Ho_Chi_Minh");
    setTime(saigonTime.format("hh mm ss A").split(" "));
    setDate(saigonTime.format("MMMM Do YYYY"));
  };
  React.useEffect(() => {
    updateClock();
    const runClock = setInterval(() => {
      updateClock();
    }, 1000);
    return () => {
      clearInterval(runClock);
    };
  }, []);
  return (
    <div>
      <div className={styles["time"]}>
        <Clock
          hour={time[0]}
          minus={time[1]}
          second={time[2]}
          time={time[3]}
          date={date}
        />
        <Date date={date} />
      </div>
    </div>
  );
}

export default App;
