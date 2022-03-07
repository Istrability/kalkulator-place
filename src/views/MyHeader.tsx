import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

const MyHeader = () => {
  const [showNote, setShowNote] = useState<boolean>(
    JSON.parse(localStorage.getItem("showNote") ?? "true")
  );

  const toggleShowNote = () => {
    const newValue = !showNote;
    localStorage.setItem("showNote", JSON.stringify(newValue));
    setShowNote(newValue);
  };

  const ArrowComponent = showNote ? ArrowUp : ArrowDown;

  return (
    <div
      style={{
        paddingBottom: "0px",
        backgroundColor: "#e8e8e8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "5px", marginTop: "10px" }}>
        Kalkulator plaće
      </h2>

      <Collapse in={showNote}>
        <div
          style={{
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Primjer 1:</span> Ukoliko je
          smjena subota 19:00 do nedjelja 7:00, unosimo 5 sati subote, 7 sati
          nedjelje te 8 sati noćnog rada. <br />
          <span style={{ fontWeight: "bold" }}>Primjer 2:</span> Ukoliko je
          smjena ponedjeljak blagdan 7:00-19:00, unosimo 5 sati popodnevnog rada
          i 12 sati blaganskog rada.
        </div>
      </Collapse>

      <div style={{ textAlign: "center", lineHeight: 0 }}>
        <ArrowComponent
          onClick={toggleShowNote}
          style={{
            cursor: "pointer",
            padding: "5px 5px 0px",
            boxSizing: "content-box",
          }}
        />
      </div>
    </div>
  );
};

export default MyHeader;
