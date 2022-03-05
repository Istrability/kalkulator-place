import { forwardRef, Ref } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

const renderTooltip = (text: string) => (
  <Tooltip id="button-tooltip">{text}</Tooltip>
);

const InfoNote = forwardRef(
  ({ text }: { text: string }, ref: Ref<HTMLSpanElement>) => {
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={() => renderTooltip(text)}
      >
        <span
          ref={ref}
          style={{ margin: "0px 3px", display: "flex", alignItems: "center" }}
        >
          <InfoCircle />
        </span>
      </OverlayTrigger>
    );
  }
);

export default InfoNote;
