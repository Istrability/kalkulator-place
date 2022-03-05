import { Button, Row, Col, Alert, Form } from "react-bootstrap";

/* import { InputSelectField } from "./InputSelectField"; */
import { validationUpToHundred } from "./validationFunctions";
import InfoNote from "../../components/InfoNote";
import { useState } from "react";
import { InputNumberField } from "./InputNumberField";
import { useForm } from "react-hook-form";
import { InputSelectField } from "./InputSelectField";
import {
  invalidnostOptions,
  profesijaOptions,
} from "../../modules/selectOptions";

const validateMjesecniBrojSati = (value: any) =>
  value === 0 ? "Unesi mjesecni fond sati" : undefined;

const InputForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      style={{ height: "100%" }}
    >
      <InputNumberField
        register={register}
        errors={errors}
        name="godineStaza"
        label="Godine Staža"
      />

      <InputNumberField
        register={register}
        errors={errors}
        name="brojSatiMjesecno"
        label="Redovan mjesečni fond sati"
        infoNote="Ukupni mjesečni fond sati. Jednak za sve zaposlenike."
      />
      {/* validate={validateMjesecniBrojSati} */}

      <InputNumberField
        register={register}
        errors={errors}
        name="brojNocnih"
        label="Broj noćnih sati"
        infoNote="22h-06h"
      />

      <InputNumberField
        register={register}
        errors={errors}
        name="brojPopodne"
        label="Broj popodnevnih sati"
        infoNote="14h-22h"
      />

      <InputNumberField
        register={register}
        errors={errors}
        name="brojSubota"
        label="Broj subotnjih sati"
      />

      <InputNumberField
        register={register}
        errors={errors}
        name="brojNedjelja"
        label="Broj nedjeljnih sati"
      />

      <InputNumberField
        register={register}
        errors={errors}
        name="brojPrekovremeni"
        label="Broj prekovremenih sati"
      />

      <InputNumberField
        register={register}
        errors={errors}
        name="brojBlagdan"
        label="Broj blagdanskih sati"
      />

      <InputNumberField
        register={register}
        errors={errors}
        name="stopaPrireza"
        label="Stopa prireza (npr. 18)"
      />
      {/* /* onChangeValidation={validationUpToHundred} */}

      <InputNumberField
        register={register}
        errors={errors}
        name="brojDjece"
        label="Broj djece"
      />

      <InputNumberField
        register={register}
        errors={errors}
        name="brojUzdrzavanih"
        label="Uzdržavani članovi"
      />

      <InputSelectField
        register={register}
        errors={errors}
        name="invalidnost"
        label="Invalidnost"
        defaultValue="nema"
      >
        {Object.entries(invalidnostOptions).map((option) => {
          return <option value={option[0]}>{option[1]}</option>;
        })}
      </InputSelectField>

      <InputSelectField
        register={register}
        errors={errors}
        name="profesija"
        label="Radno mjesto"
        defaultValue="lijecnikHMP"
      >
        {Object.entries(profesijaOptions).map((option) => {
          return <option value={option[0]}>{option[1]}</option>;
        })}
      </InputSelectField>

      {/*<InputNumberField
        register={register}
        errors={errors}  name="" label="" 'Koeficijent' infoNote='Unesi ukoliko profesije nema na popisu'>
          <Form.Control name='koeficijent' />
*/}

      <div style={{ width: "100%", margin: "0.5rem auto 0.2rem" }}>
        <Button type="submit" style={{ width: "100%" }}>
          Izračunaj
        </Button>
      </div>

      {/* invalid ? (
        <Row>
          <Col xs={12}>
            <Alert variant={"warning"} style={{ margin: "0px 0px 0px 12px" }}>
              Provjeri vrijednosti!
            </Alert>
          </Col>
        </Row>
      ) : null */}
    </Form>
  );
};

const initialValues = {
  godineStaza: 0,
  brojSatiMjesecno: 100,
  brojNocnih: 0,
  brojPopodne: 0,
  brojSubota: 0,
  brojNedjelja: 0,
  brojPrekovremeni: 0,
  brojBlagdan: 0,
  stopaPrireza: 18,
  brojDjece: 0,
  brojUzdrzavanih: 0,
  invalidnost: "nema",
  profesija: "lijecnikHMP",
};

export { InputForm };
