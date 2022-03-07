import { Col, Form } from "react-bootstrap";

const OutputFieldGroup = ({
  label,
  value,
  hidden = false,
  controlStyle,
}: {
  label: string;
  value: number;
  hidden?: boolean;
  controlStyle?: React.CSSProperties;
}) => {
  return hidden ? null : (
    <Col xs={6}>
      <Form.Group style={{ marginBottom: "0.3rem", marginTop: "0.3rem" }}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type="text"
          placeholder="---"
          readOnly
          value={value !== undefined ? value.toFixed(2) : ""}
          style={{ width: "100%", ...controlStyle }}
        />
      </Form.Group>
    </Col>
  );
};

export { OutputFieldGroup };
