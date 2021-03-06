import { Col, Form } from "react-bootstrap";
import InfoNote from "../../components/InfoNote";
import { validateInteger } from "./validationFunctions";

const InputSelectField = ({
  register,
  name,
  label,
  children,
  infoNote,
  validate = validateInteger,
  errors,
  defaultValue,
  defaults,
}: {
  register: any;
  name: string;
  label: string;
  children: any;
  infoNote?: string;
  validate?: (value: string) => boolean;
  errors: any;
  defaultValue: string;
  defaults: any;
}) => {
  return (
    <Col xs={6}>
      <Form.Group
        controlId={name}
        style={{ marginBottom: "0.3rem", marginTop: "0.3rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Form.Label style={{ lineHeight: 1, marginBottom: "0.1rem" }}>
            {label}
          </Form.Label>
          {infoNote && <InfoNote text={infoNote} />}
        </div>
        <Form.Select
          {...register(name, {})}
          isInvalid={errors[name]}
          defaultValue={defaults[name] ?? defaultValue}
        >
          {children}
        </Form.Select>
      </Form.Group>
    </Col>
  );
};

export { InputSelectField };
