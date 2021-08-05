import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import ModalPop from "../components/Modal";
import "./pages.css";
function PlanetTable() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState("");
  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          console.log(result);
          setPlanets(result.results);
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
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Terrain</th>
          </tr>
        </thead>
        <tbody>
          {planets.map(data => (
            <tr
              onClick={() => {
                setModalData(data.population);
                setModal(true);
              }}
            >
              <td>{data.name}</td>
              <td>{data.climate}</td>
              <td>{data.terrain}</td>{" "}
            </tr>
          ))}
        </tbody>
        <ModalPop
          tittle="Population"
          txt={modalData}
          show={modal}
          onHide={() => setModal(false)}
        />
      </Table>
    );
  }
}

export default PlanetTable;
