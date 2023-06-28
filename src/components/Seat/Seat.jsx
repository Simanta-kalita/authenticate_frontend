import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Popup from "../Popup/Popup";
import styles from "./Seat.styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

const Seat = (props) => {
  const [seatNo, setSeatNo] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const { seatNo: propSeatNo } = props;
    setSeatNo(propSeatNo);
  }, [props]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="seat"
        style={styles.seat}
        onClick={() => setModalOpen(true)}
      >
        <div className="cushion"></div>
      </div>
      <Modal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <Popup closeModal={closeModal} seatNo={seatNo} />

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </>
  );
};

export default Seat;
