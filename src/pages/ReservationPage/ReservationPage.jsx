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
            <div className="driver">
              <div className="driverArea">
                <div className="steeringwheel"></div>
              </div>
            </div>
            <div className="seatContainer">
              <div className={cx("seatRow", "doubleSpecific")}>
                <Seat seatNo={1} />
                <Seat seatNo={2} color="grey" />
                <Seat seatNo={3} color="red" />
                {getSeatNumber(4, 7).map((num) => {
                  return <Seat seatNo={num} />;
                })}
                <Seat seatNo={7} color="grey" />
                <Seat seatNo={8} color="grey" />
                <Seat seatNo={9} />
                <Seat seatNo={10} />
              </div>
              <div className="seatRow">
                <Seat seatNo={11} color="red" />
                <Seat seatNo={12} color="grey" />
                <Seat seatNo={13} color="red" />
                <Seat seatNo={14} color="grey" />
                <Seat seatNo={15} color="grey" />
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
            <div className={cx("seatContainer", "upperSeatContainer")}>
              <div className={cx("seatRow", "doubleSpecific")}>
                <Seat seatNo={17} color="grey" />
                {getSeatNumber(18, 20).map((num) => {
                  return <Seat seatNo={num} />;
                })}
                <Seat seatNo={20} color="grey" />
                {getSeatNumber(21, 25).map((num) => {
                  return <Seat seatNo={num} />;
                })}
                <Seat seatNo={25} color="grey" />
                <Seat seatNo={26} />
              </div>
              <div className="seatRow">
                <Seat seatNo={27} color="grey" />
                <Seat seatNo={28} color="grey" />
                <Seat seatNo={29} color="red" />
                <Seat seatNo={30} color="grey" />
                <Seat seatNo={31} />
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
