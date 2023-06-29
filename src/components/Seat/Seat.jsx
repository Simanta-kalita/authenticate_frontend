import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import TicketForm from "../TicketForm/TicketForm";
import styles from "./Seat.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

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
  const [seatColor, setSeatColor] = useState("white");
  const [borderColor, setBorderColor] = useState("#6f6f6f");

  useEffect(() => {
    const { seatNo: propSeatNo, color, bColor } = props;
    if (color === "red") {
      setSeatColor("#f1a9a0");
    } else if (color === "grey") {
      setSeatColor("#cbcbcb");
    }

    if (bColor === "light") {
      setBorderColor("#b6b7ba");
    }
    setSeatNo(propSeatNo);
  }, [props]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="seat"
        style={{ backgroundColor: seatColor, borderColor: borderColor }}
        onClick={() => setModalOpen(true)}
      >
        <div className="cushion" style={{ borderColor: borderColor }}></div>
      </div>
      <Modal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <FontAwesomeIcon
            size="2x"
            color="#d62b47"
            onClick={() => setModalOpen(false)}
            icon={faWindowClose}
          />
        </div>
        <i
          onClick={() => setModalOpen(false)}
          class="fa fa-window-close"
          aria-hidden="true"
        ></i>
        <TicketForm closeModal={closeModal} seatNo={seatNo} />
      </Modal>
    </>
  );
};

export default Seat;
