import { Col, Form } from "react-bootstrap";
import InfoNote from "../../components/InfoNote";
import { validateInteger } from "./validationFunctions";

const InputNumberField = ({
  register,
  name,
  label,
  infoNote,
  validate = validateInteger,
  errors,
  defaults,
  defaultValue,
  step,
}: {
  register: any;
  name: string;
  label: string;
  infoNote?: string;
  validate?: (value: string) => boolean;
  errors: any;
  defaults: any;
  defaultValue?: string;
  step?: number | "any";
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
          <Form.Label>{label}</Form.Label>
          {infoNote && <InfoNote text={infoNote} />}
        </div>
        <Form.Control
          {...register(name, {
            /* validate: validate, */
            required: true,
            valueAsNumber: true,
            min: 0,
          })}
          type="number"
          step={step ?? "any"}
          isInvalid={errors[name]}
          defaultValue={defaults[name] ?? defaultValue ?? ""}
        />
      </Form.Group>
    </Col>
  );
};

export { InputNumberField };
