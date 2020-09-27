import React, { useState, useCallback } from "react";
import styles from "./App.module.scss";
import Bitexco from "./assets/bitexco_icon.png";
import CN from "./assets/cn_icon.png";
import IconButton from "./component/iconButton/iconButton";
import Clock from "./component/clock/clock";
import Date from "./component/date/date";
import timezone from "moment-timezone";
import moment from "moment";
const cityInfor = [
  {
    id: "TO",
    name: "Toronto",
    symbol: CN,
  },
  {
    id: "SG",
    name: "Sai Gon",
    symbol: Bitexco,
  },
];
function App() {
  const [city, setCity] = useState("TO");
  const [time, setTime] = useState(["--", "--", "--", "--"]);
  const [date, setDate] = useState("");
  const backgroundStyle = [styles["content"]];
  const updateClock = useCallback((city) => {
    //let torontoTime = timezonemoment.format("hh mm ss A");
    if (city === "TO") {
      setTime(moment().format("hh mm ss A").split(" "));
      setDate(moment().format("MMMM Do YYYY"));
    } else {
      let saigonTime = timezone.tz("Asia/Ho_Chi_Minh");
      setTime(saigonTime.format("hh mm ss A").split(" "));
      setDate(saigonTime.format("MMMM Do YYYY"));
    }
  }, []);
  const updateCity = (city) => {
    setCity(city);
  };
  React.useEffect(() => {
    updateClock(city);
    const runClock = setInterval(() => {
      updateClock(city);
    }, 1000);
    return () => {
      clearInterval(runClock);
    };
  }, [city, updateClock]);
  if (
    (time[3] === "PM" && parseInt(time[0]) > 7 && parseInt(time[0]) < 12) ||
    (time[3] === "AM" && (parseInt(time[0]) < 5 || parseInt(time[0]) === 12))
  ) {
    backgroundStyle.push(styles["night"]);
  } else {
    backgroundStyle.push(styles["day"]);
  }
  return (
    <div className={backgroundStyle.join(" ")}>
      <div className={styles["day_night"]}>
        <div className={styles["sun"]}></div>
        <div className={styles["moon"]}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles["stars"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles["water"]}></div>
      </div>
      <div className={styles["time"]}>
        <div className={styles["time_options"]}>
          {cityInfor.map((item) => (
            <IconButton
              key={item.id}
              id={item.id}
              img={item.symbol}
              title={item.name}
              curCity={city}
              click={() => updateCity(item.id)}
            />
          ))}
        </div>

        <Clock
          hour={time[0]}
          minus={time[1]}
          second={time[2]}
          time={time[3]}
          date={date}
        />
        <Date date={date} />
        <div className={styles["favorite-site"]}>
          <a className={styles["icon"]} href="https://www.facebook.com/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className={styles["icon"]} href="https://www.google.com">
            <i className="fab fa-google"></i>
          </a>
          <a className={styles["icon"]} href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a className={styles["icon"]} href="https://www.youtube.com">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
