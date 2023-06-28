import React from "react";
import Header from "../../components/Header/Header";
import cx from "classnames";
import Seat from "../../components/Seat/Seat";
import styles from "./ReservationPage.styles.css";
import BackSeat from "../../components/BackSeat/BackSeat";

const getSeatNumber = (start, end) => {
  return Array.from({ length: end - start }, (x, i) => i + start);
};

const ReservationPage = () => {
  return (
    <>
      <Header />
      <div className="reserveLayout" style={styles.reserveLayout}>
        <div className="reserveTitle" style={styles.reserveTitle}>
          Click on Available seat to proceed with your transaction.
        </div>
        <div className="busViewLower" style={styles.busViewLower}>
          <div className="deck">Lower Deck</div>
          <div className="busViewLowerContainer">
            <div className="driver"></div>
            <div className="seatContainer">
              <div className={cx("seatRow", "doubleSpecific")}>
                {getSeatNumber(1, 11).map((num) => {
                  return <Seat seatNo={num} />;
                })}
              </div>
              <div className="seatRow">
                {getSeatNumber(11, 16).map((num) => {
                  return <Seat seatNo={num} />;
                })}
              </div>
            </div>
            <div className="backSide">
              <BackSeat deck="lower" seatNo={16} />
            </div>
          </div>
        </div>
        <div className="busViewLower" style={styles.busViewLower}>
          <div className="deck">Upper Deck</div>
          <div className={cx("busViewLowerContainer", "busViewUpperContainer")}>
            <div className="driver"></div>
            <div className="seatContainer">
              <div className={cx("seatRow", "doubleSpecific")}>
                {getSeatNumber(17, 27).map((num) => {
                  return <Seat seatNo={num} />;
                })}
              </div>
              <div className="seatRow">
                {getSeatNumber(27, 32).map((num) => {
                  return <Seat deck="upper" seatNo={num} />;
                })}
              </div>
            </div>
            <div className="backSide">
              <BackSeat seatNo={32} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
