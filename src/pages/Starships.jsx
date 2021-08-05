import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./pages.css";
import ModalPop from "../components/Modal";

function ShipsTable() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ships, setShips] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState("");
  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          console.log(result);
          setShips(result.results);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="txt__font">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="txt__font">Loading...</div>;
  } else {
    return (
      <Table striped bordered hover variant="dark" className="table" responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {ships.map(data => (
            <tr
              onClick={() => {
                setModalData(data.max_atmosphering_speed);
                setModal(true);
              }}
            >
              <td>{data.name}</td>
              <td>{data.model}</td>
              <td>{data.starship_class}</td>{" "}
            </tr>
          ))}
        </tbody>
        <ModalPop
          tittle="Max Speed"
          txt={modalData}
          show={modal}
          onHide={() => setModal(false)}
        />
      </Table>
    );
  }
}

export default ShipsTable;
