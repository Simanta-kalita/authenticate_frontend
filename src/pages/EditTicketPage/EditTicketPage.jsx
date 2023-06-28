import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditTicketPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();
  const location = useLocation();

  //   const index = ticketData
  //     .map(function (e) {
  //       return e.seatNo;
  //     })
  //     .indexOf(seatNo);

  const handleSubmit = (e) => {
    const { seatNo } = location.state;

    console.log("data sub ", seatNo, firstName, lastName, email, seatNo);

    e.preventDefault();

    localStorage.setItem(
      JSON.stringify(seatNo),
      JSON.stringify({ firstName, lastName, email, seatNo })
    );

    history("/dashboard");
  };

  useEffect(() => {
    console.log(location.state);
    const { seatNo } = location.state;
    const ticketItem = JSON.parse(localStorage.getItem(JSON.stringify(seatNo)));
    const { firstName, lastName, email } = ticketItem;
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
  }, []);

  return (
    <div>
      <Form style={{ margin: "15rem" }}>
        <Form.Group controlId="formFirstName">
          <FormControl
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="formLastName">
          <FormControl
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <FormControl
            type="text"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
