import { Col, Form } from "react-bootstrap";

const OutputFieldGroup = ({ label, value, hidden }: any) =>
  hidden ? null : (
    <Col xs={6}>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type="text"
          placeholder="---"
          readOnly
          value={value ? value.toFixed(2) : value}
          style={{ width: "100%" }}
        />
      </Form.Group>
    </Col>
  );

export { OutputFieldGroup };
