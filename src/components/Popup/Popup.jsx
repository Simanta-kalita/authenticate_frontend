import React, { useState, useEffect } from "react";

const Popup = (props) => {
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
    localStorage.setItem(
      JSON.stringify(seatNo),
      JSON.stringify({ firstName, lastName, email, seatNo })
    );
    event.preventDefault();
    closeModal();
  };

  return (
    <div>
      <h4>Please Enter the Details</h4>
      <form>
        <p>{seatNo}</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleInput}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleInput}
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={handleInput}
        />
        <button type="submit" onClick={handleSubmit}>
          Buy Ticket
        </button>
      </form>
    </div>
  );
};

export default Popup;
