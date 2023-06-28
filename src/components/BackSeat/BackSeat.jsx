import React, { useEffect, useState } from "react";
import styles from "./BackSeat.styles.css";
import cx from "classnames";

export default function BackSeat(props) {
  const [deck, SetDeck] = useState("lower");

  useEffect(() => {
    const { deck } = props;
    SetDeck(deck);
  }, [props]);

  return (
    <div
      className={cx(
        "backSeat",
        deck === "lower" ? "backSeatLower" : "backSeatUpper"
      )}
      style={styles.backSeat}
    >
      <div className="backCushion"></div>
    </div>
  );
}
