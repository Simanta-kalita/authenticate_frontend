import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./DashBoardPage.styles.css";
import Spinner from "../../components/Spinner/Spinner";

const DashBoardPage = () => {
  const [ticketData, setTicketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  // check if data is JSON object
  const isJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  // on start of loading of page, get data from local storage and update the state
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
            _.get(storageObj, "lastName") &&
            _.get(storageObj, "email")
          ) {
            storageData.push(storageObj);
          }
        }
      }
      setTicketData(storageData);
      console.log("ticketData", ticketData);
    };

    fetchData();
    setLoading(false);
  }, []);

  // delete ticket
  const handleDelete = (seatNo) => {
    localStorage.removeItem(JSON.stringify(seatNo));

    // get index of delete data, to be removed from state
    const index = ticketData
      .map(function (e) {
        return e.seatNo;
      })
      .indexOf(seatNo);

    ticketData.splice(index, 1);

    history("/dashboard");
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Header />
      <div className="dashboardHeader">
        <h1 className="dashBoardText">DashBoard</h1>
      </div>
      <div className="board">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Seat Number</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Date</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ticketData && ticketData.length > 0 ? (
              ticketData.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{item.seatNo}</td>
                  <td
                    style={{ textAlign: "center" }}
                  >{`${item.firstName} ${item.lastName}`}</td>
                  <td style={{ textAlign: "center" }}>{item.email}</td>
                  <td style={{ textAlign: "center" }}>{item.date}</td>
                  <td style={{ textAlign: "center" }}>
                    {/* route to edit page on click of EDIT ticket */}
                    <Link
                      to={"/edit"}
                      state={{
                        seatNo: item.seatNo,
                        firstName: item.firstName,
                        lastName: item.lastName,
                        email: item.email,
                        date: item.date,
                      }}
                      style={{ margin: "1rem" }}
                    >
                      <Button className="editButton">Edit</Button>
                    </Link>
                    <Button
                      style={{ margin: "1rem" }}
                      className="deleteButton"
                      onClick={() => handleDelete(item.seatNo)}
                    >
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
