import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

const InfoNote = ({ text }: { text: string }) => {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 0, hide: 50 }}
      overlay={
        <Tooltip id="button-tooltip" style={{ fontSize: "16px" }}>
          {text}
        </Tooltip>
      }
    >
      <span
        style={{
          margin: "0px 3px 0.2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InfoCircle />
      </span>
    </OverlayTrigger>
  );
};

export default InfoNote;
