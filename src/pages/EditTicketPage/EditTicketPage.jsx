import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./EditTicketPage.styles.css";
import { validateEmail, validateName } from "../../utils/validators";

export default function EditTicketPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const history = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { seatNo } = location.state;

    // validation for FirstName, LastName and Email
    if (
      validateEmail(email) &&
      validateName(firstName) &&
      validateName(lastName)
    ) {
      // update ticket data with the new data and save in local storage
      localStorage.setItem(
        JSON.stringify(seatNo),
        JSON.stringify({ firstName, lastName, email, seatNo, date })
      );

      history("/dashboard");
    } else {
      alert("Please enter valid email and name");
    }
  };

  useEffect(() => {
    const { seatNo } = location.state;

    // Get previous Ticket data from local storage and update the state
    const ticketItem = JSON.parse(localStorage.getItem(JSON.stringify(seatNo)));
    const { firstName, lastName, email, date } = ticketItem;
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setDate(date);
  }, []);

  return (
    <div className="editFormContainer">
      <Form className="editForm" style={{ margin: "10rem 15rem 15rem 15rem" }}>
        <Form.Group className="editFormItem" controlId="formFirstName">
          <h3>First Name</h3>
          <FormControl
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group className="editFormItem" controlId="formLastName">
          <h3>Last Name</h3>
          <FormControl
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group className="editFormItem" controlId="formEmail">
          <h3>Email</h3>
          <FormControl
            type="text"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Button
          className="updateButton"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}
