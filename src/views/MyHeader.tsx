import { useState } from "react";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

const MyHeader = () => {
  const [showNote, setShowNote] = useState(true);

  return (
    <div
      style={{
        paddingBottom: "0px",
        backgroundColor: "#e8e8e8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "5px" }}>Kalkulator plaće</h2>

      {showNote ? (
        <div style={{ textAlign: "center", fontSize: "16px" }}>
          <span style={{ fontWeight: "bold" }}>Primjer 1:</span> Ukoliko je
          smjena subota 19:00 do nedjelja 7:00, unosimo 5 sati subote, 7 sati
          nedjelje te 8 sati noćnog rada. <br />
          <span style={{ fontWeight: "bold" }}>Primjer 2:</span> Ukoliko je
          smjena ponedjeljak blagdan 7:00-19:00, unosimo 5 sati popodnevnog rada
          i 12 sati blaganskog rada.
        </div>
      ) : null}

      <div style={{ textAlign: "center", lineHeight: 0 }}>
        {showNote ? (
          <ArrowUp
            onClick={() => setShowNote(!showNote)}
            style={{
              cursor: "pointer",
              padding: "0px 5px",
              boxSizing: "content-box",
            }}
          />
        ) : (
          <ArrowDown
            onClick={() => setShowNote(!showNote)}
            style={{
              cursor: "pointer",
              padding: "0px 5px",
              boxSizing: "content-box",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MyHeader;
