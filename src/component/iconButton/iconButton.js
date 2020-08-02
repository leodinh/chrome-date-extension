import React from "react";
import styles from "./iconButton.module.scss";
function iconButton({ id, img, title, click, curCity }) {
  const style = [styles["button"]];
  if (curCity === id) {
    style.push(styles["button-active"]);
  }
  return (
    <div className={style.join(" ")} onClick={click}>
      <img
        src={img}
        alt="icon"
        className={id === "TO" ? styles["img-to"] : ""}
      />
      <p>{title}</p>
    </div>
  );
}

export default iconButton;
