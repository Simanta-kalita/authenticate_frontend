import React, { useState, useEffect } from "react";
import styles from "./TicketForm.styles.css";
import { validateEmail, validateName } from "../../utils/validators";

const TicketForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [seatNo, setSeatNo] = useState("");

  useEffect(() => {
    const { seatNo: propSeatNo } = props;
    console.log("seatNo", propSeatNo);
    setSeatNo(propSeatNo);
  }, [props]);

  const handleInput = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit", { firstName, lastName, email, seatNo });
    const { closeModal } = props;
    event.preventDefault();

    // validation for FirstName, LastName and Email
    if (
      validateEmail(email) &&
      validateName(firstName) &&
      validateName(lastName)
    ) {
      // update ticket data with the entered data and save in local storage
      localStorage.setItem(
        JSON.stringify(seatNo),
        JSON.stringify({
          firstName,
          lastName,
          email,
          seatNo,
          date: new Date().toDateString(),
        })
      );
      closeModal();
    } else {
      alert("Please enter valid email and name");
    }
  };

  return (
    <div className="formContainer">
      <div className="formHeaderContainer">
        <h4 className="formHeader">Please enter the following details</h4>
      </div>
      <form className="form">
        <p>{`Seat number - ${seatNo}`}</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="formItem"
          value={firstName}
          onChange={handleInput}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="formItem"
          value={lastName}
          onChange={handleInput}
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="formItem"
          value={email}
          onChange={handleInput}
        />
        <button className="formButton" type="submit" onClick={handleSubmit}>
          Buy Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
