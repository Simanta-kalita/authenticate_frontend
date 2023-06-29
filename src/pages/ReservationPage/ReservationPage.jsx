import React, { useEffect, useState } from "react";
import cx from "classnames";
import Header from "../../components/Header/Header";
import Seat from "../../components/Seat/Seat";
import styles from "./ReservationPage.styles.css";
import BackSeat from "../../components/BackSeat/BackSeat";
import Spinner from "../../components/Spinner/Spinner";

// generate seat numbers as an array
const getSeatNumber = (start, end) => {
  return Array.from({ length: end - start }, (x, i) => i + start);
};

// A loader will show till the page completely loads
const ReservationPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  // Reservation Page layout
  return loading ? (
    <Spinner />
  ) : (
    <>
      <Header />
      <div className="reserveLayout">
        <div className="reserveTitle">
          Click on an Available seat to proceed with your transaction.
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
                <Seat seatNo={1} bColor="light" />
                <Seat seatNo={2} color="grey" />
                <Seat seatNo={3} color="red" />
                {getSeatNumber(4, 7).map((num) => {
                  return <Seat seatNo={num} bColor="light" />;
                })}
                <Seat seatNo={7} color="grey" />
                <Seat seatNo={8} color="grey" />
                <Seat seatNo={9} bColor="light" />
                <Seat seatNo={10} bColor="light" />
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
        <div className="busViewLower">
          <div className="deck">Upper Deck</div>
          <div className={cx("busViewLowerContainer", "busViewUpperContainer")}>
            <div className="driver"></div>
            <div className={cx("seatContainer", "upperSeatContainer")}>
              <div className={cx("seatRow", "doubleSpecific")}>
                <Seat seatNo={17} color="grey" />
                {getSeatNumber(18, 20).map((num) => {
                  return <Seat seatNo={num} bColor="light" />;
                })}
                <Seat seatNo={20} color="grey" />
                {getSeatNumber(21, 25).map((num) => {
                  return <Seat seatNo={num} bColor="light" />;
                })}
                <Seat seatNo={25} color="grey" />
                <Seat seatNo={26} bColor="light" />
              </div>
              <div className="seatRow">
                <Seat seatNo={27} color="grey" />
                <Seat seatNo={28} color="grey" />
                <Seat seatNo={29} color="red" />
                <Seat seatNo={30} color="grey" />
                <Seat seatNo={31} bColor="light" />
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
