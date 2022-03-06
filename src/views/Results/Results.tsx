import { OutputFieldGroup } from "./OutputFieldGroup";
import { Row, Col, Spinner, Alert } from "react-bootstrap";

import { useAppSelector } from "../../modules/store";
import { selectCalculatorResult } from "../../modules/calculatorSlice";
import { selectHideOptional } from "../../modules/hideOptionalSlice";

const Results = () => {
  const { values, calculating } = useAppSelector(selectCalculatorResult);
  const hideOptional = useAppSelector(selectHideOptional);

  if (typeof values === "string") {
    return <Alert variant="warning">{values}</Alert>;
  }

  const {
    osnovica,
    osnovnaPlaca,
    osnovnaSatnica,
    dodatnoNocni,
    dodatnoPopodnevni,
    dodatnoSubotnji,
    dodatnoNedjeljni,
    dodatnoPrekovremeni,
    dodatnoBlagdanski,
    brutoPlaca,
    dohodak,
    poreznaOlaksica,
    poreznaOsnovica,
    porez24,
    porez36,
    ukupniPorez,
    prirez,
    nettoPlaca,
  } = values;

  return calculating ? (
    <Spinner
      animation="border"
      style={{ position: "absolute", left: "calc(50% - 20px)", top: "150px" }}
    />
  ) : (
    <form>
      <Row>
        <OutputFieldGroup
          label="Osnovica"
          value={osnovica}
          hidden={hideOptional}
        />
        {/* <OutputFieldGroup
          label="Koeficijent složenosti posla"
          value={koeficijentSlozenostiPosla}
          hidden={hideOptional}
        /> */}
        <OutputFieldGroup
          label="Osnovna placa"
          value={osnovnaPlaca}
          hidden={hideOptional}
        />

        <Col xs={6} md={6} />
        <div />

        <OutputFieldGroup
          label="Osnovna satnica"
          value={osnovnaSatnica}
          hidden={hideOptional}
        />

        <Col xs={6} md={6} hidden={hideOptional} />
        <div />

        <OutputFieldGroup
          label="Noćni dodatak"
          value={dodatnoNocni}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Popodnevni dodatak"
          value={dodatnoPopodnevni}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Subotnji dodatak"
          value={dodatnoSubotnji}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Nedjeljni dodatak"
          value={dodatnoNedjeljni}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Prekovremeni dodatak"
          value={dodatnoPrekovremeni}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Blagdanski dodatak"
          value={dodatnoBlagdanski}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Bruto plaća"
          value={brutoPlaca}
          controlStyle={{ fontWeight: "bold" }}
        />
        <OutputFieldGroup
          label="Dohodak"
          value={dohodak}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Porezna olakšica"
          value={poreznaOlaksica}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Porezna osnovica"
          value={poreznaOsnovica}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Porez 24"
          value={porez24}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Porez 36"
          value={porez36}
          hidden={hideOptional}
        />
        <OutputFieldGroup
          label="Porez ukupno"
          value={ukupniPorez}
          hidden={hideOptional}
        />
        <OutputFieldGroup label="Prirez" value={prirez} hidden={hideOptional} />
        <OutputFieldGroup
          label="Neto plaća"
          value={nettoPlaca}
          controlStyle={{ fontWeight: "bold" }}
        />
      </Row>
    </form>
  );
};

export default Results;
