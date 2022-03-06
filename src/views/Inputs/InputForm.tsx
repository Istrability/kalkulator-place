import { Button, Form, Row, Col } from "react-bootstrap";

import { InputNumberField } from "./InputNumberField";
import { useForm } from "react-hook-form";
import { InputSelectField } from "./InputSelectField";
import { invalidnostOptions } from "../../modules/selectOptions";
import { useState } from "react";

const loadDefaults = () => {
  const data = localStorage.getItem("formData");
  if (data) {
    return JSON.parse(data);
  } else {
    return {};
  }
};

const InputForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [defaults] = useState<any>(loadDefaults);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      style={{ height: "100%" }}
    >
      <Row>
        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojSatiMjesecno"
          label="Mjesečni fond sati"
          infoNote="Ukupni fond sati za promatrani mjesec. Jednak za sve zaposlenike."
        />
        {/* validate={validateMjesecniBrojSati} */}
        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojBlagdan"
          label="Broj blagdanskih sati"
        />

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojPrekovremeni"
          label="Broj prekovremenih sati"
        />
        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojPopodne"
          label="Broj popodnevnih sati"
          infoNote="14h-22h"
        />

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojNocnih"
          label="Broj noćnih sati"
          infoNote="22h-06h"
        />
        <Col xs={6} />

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojSubota"
          label="Broj subotnjih sati"
        />
        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojNedjelja"
          label="Broj nedjeljnih sati"
        />

        <div
          className="input-form-divider"
          style={{
            width: "95%",
            height: "2px",
            background: "lightgray",
            /* margin: "28px auto", */
          }}
        />

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="stopaPrireza"
          label="Stopa prireza"
          infoNote="npr. 18"
          defaultValue="18"
        />
        {/* /* onChangeValidation={validationUpToHundred} */}

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="godineStaza"
          label="Godine staža"
        />

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojDjece"
          label="Broj djece"
        />

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="brojUzdrzavanih"
          label="Uzdržavani članovi"
        />

        <InputSelectField
          defaults={defaults}
          register={register}
          errors={errors}
          name="invalidnost"
          label="Invalidnost"
          defaultValue="nema"
        >
          {Object.entries(invalidnostOptions).map((option) => {
            return (
              <option key={option[0]} value={option[0]}>
                {option[1]}
              </option>
            );
          })}
        </InputSelectField>

        {/* <InputSelectField
        defaults={defaults}
        register={register}
        errors={errors}
        name="profesija"
        label="Radno mjesto"
        defaultValue="lijecnikHMP"
      >
        {Object.entries(profesijaOptions).map((option) => {
          return <option value={option[0]}>{option[1]}</option>;
        })}
      </InputSelectField> */}

        {/* watch("profesija", defaults["profesija"] ?? "lijecnikHMP") ===
        "drugo" && (
        <>
          <InputNumberField
            defaults={defaults}
            register={register}
            errors={errors}
            name="koeficijentPlace"
            label="Koeficijent složenosti posla"
          />

          <InputNumberField
            defaults={defaults}
            register={register}
            errors={errors}
            name="koeficijentDodatkaNaProfesiju"
            label="Koeficijent dodatka na profesiju"
          />
        </>
      ) */}

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="koeficijentSlozenostiPosla"
          label="Koeficijent složenosti posla"
        />

        <InputNumberField
          defaults={defaults}
          register={register}
          errors={errors}
          name="koeficijentPolozajnogDodatka"
          label="Koeficijent položajnog dodatka"
        />

        <InputSelectField
          defaults={defaults}
          register={register}
          errors={errors}
          name="koeficijentDodatkaZaOdgovornost"
          label="Koeficijent dodatka za odgovornost"
          defaultValue="0.16"
        >
          {[0.16, 0.08, 0].map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </InputSelectField>
      </Row>

      <Row style={{ margin: "0.5rem auto 0.2rem" }}>
        <Button type="submit" style={{ width: "100%" }}>
          Izračunaj
        </Button>
      </Row>
    </Form>
  );
};

export { InputForm };
