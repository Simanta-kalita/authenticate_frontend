import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const DashBoardPage = () => {
  const [ticketData, setTicketData] = useState([]);
  const history = useNavigate();

  const isJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const fetchData = async () => {
      let storageData = [];
      for (let i = 0; i < localStorage.length; i++) {
        let storageObj = "";
        const item = localStorage.getItem(localStorage.key(i));
        if (isJsonString(item)) {
          storageObj = JSON.parse(item);
          if (
            storageObj &&
            _.get(storageObj, "firstName") &&
            _.get(storageObj, "firstName") &&
            _.get(storageObj, "email")
          ) {
            storageData.push(storageObj);
          }
          console.log(storageData);
        }
      }
      setTicketData(storageData);
      console.log("ticketData", ticketData);
    };

    fetchData();
  }, []);

  const handleEdit = () => {};

  const handleDelete = (seatNo) => {
    localStorage.removeItem(JSON.stringify(seatNo));

    const index = ticketData
      .map(function (e) {
        return e.seatNo;
      })
      .indexOf(seatNo);

    ticketData.splice(index, 1);

    history("/dashboard");
  };

  return (
    <>
      <Header />
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Seat Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ticketData && ticketData.length > 0 ? (
              ticketData.map((item, index) => (
                <tr key={index}>
                  <td>{item.seatNo}</td>
                  <td>{`${item.firstName} ${item.lastName}`}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link
                      to={"/edit"}
                      state={{
                        seatNo: item.seatNo,
                        firstName: item.firstName,
                        lastName: item.lastName,
                        email: item.email,
                      }}
                    >
                      <Button
                        onClick={() =>
                          handleEdit(
                            item.seatNo,
                            item.firstName,
                            item.lastName,
                            item.email,
                            ticketData
                          )
                        }
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button onClick={() => handleDelete(item.seatNo)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No data available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DashBoardPage;
