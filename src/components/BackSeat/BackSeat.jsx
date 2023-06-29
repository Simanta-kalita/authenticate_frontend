import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Popup from "../Popup/Popup";
import cx from "classnames";
import styles from "./BackSeat.styles.css";
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

export default function BackSeat(props) {
  const [deck, SetDeck] = useState("lower");
  const [seatNo, setSeatNo] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const { deck, seatNo: propSeatNo } = props;
    SetDeck(deck);
    setSeatNo(propSeatNo);
  }, [props]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className={cx(
          "backSeat",
          deck === "lower" ? "backSeatLower" : "backSeatUpper"
        )}
        style={styles.backSeat}
        onClick={() => setModalOpen(true)}
      >
        <div className="backCushion"></div>
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
        <Popup closeModal={closeModal} seatNo={seatNo} />
      </Modal>
    </>
  );
}
