import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./pages.css";
import ModalPop from "../components/Modal";
function PeopleTable() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setPeople] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          console.log(result);
          setPeople(result.results);
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
            <th>Year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {people.map(data => (
            <tr
              onClick={() => {
                setModalData(data.eye_color);
                setModal(true);
              }}
            >
              <td>{data.name}</td>
              <td>{data.birth_year}</td>
              <td>{data.gender}</td>{" "}
            </tr>
          ))}
        </tbody>
        <ModalPop
          tittle="Eye color"
          txt={modalData}
          show={modal}
          onHide={() => setModal(false)}
        />
      </Table>
    );
  }
}

export default PeopleTable;
