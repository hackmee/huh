import React, { useState, useEffect } from "react";
import "./styles.css";
import { buttons } from "./data";
import { getAppointment, filterAppointment } from "../services/services";
export default function App() {
  const [FiltredAppointment, setFiltredAppointment] = useState(null);
  useEffect(() => {
    setFiltredAppointment(getAppointment());
  }, []);

  function handleAppointment(e) {
    let typeAppointment = e.target.value;
    typeAppointment !== "all"
      ? setFiltredAppointment(filterAppointment(typeAppointment))
      : setFiltredAppointment(getAppointment());
  }

  return (
    <>
      {buttons &&
        buttons.map((type, index) => (
          <>
            <button key={index} value={type.value} onClick={handleAppointment}>
              {type.name}
            </button>
          </>
        ))}

      {FiltredAppointment &&
        FiltredAppointment.map(type => (
          <ul key={type.id}>
            <li>{type.name}</li>
          </ul>
        ))}
    </>
  );
}
