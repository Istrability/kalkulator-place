import { Form } from "react-bootstrap";
import InfoNote from "../../components/InfoNote";
import { validateInteger } from "./validationFunctions";

const InputNumberField = ({
  register,
  name,
  label,
  infoNote,
  validate = validateInteger,
  errors,
  defaultValue = "0",
}: {
  register: any;
  name: string;
  label: string;
  infoNote?: string;
  validate?: (value: string) => boolean;
  errors: any;
  defaultValue?: string;
}) => {
  return (
    <Form.Group
      controlId={name}
      style={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}
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
      <Form.Control
        {...register(name, {
          validate: validate,
          required: true,
          valueAsNumber: true,
          min: 0,
        })}
        type="number"
        isInvalid={errors[name]}
        defaultValue={defaultValue}
      />
    </Form.Group>
  );
};

export { InputNumberField };
