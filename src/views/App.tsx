import { Container, Row, Col } from "react-bootstrap";
import { InputForm } from "./Inputs/InputForm";
import Results from "./Results/Results";
import MyHeader from "./MyHeader";
import { ScrollingPanel } from "./ScrollingPanel/ScrollingPanel";
import { CreditsBar } from "./CreditsBar";

import { useAppDispatch } from "../modules/store";
import { calculateResult } from "../modules/calculatorSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const onFormSubmit = (formData: any) => {
    localStorage.setItem("formData", JSON.stringify(formData));
    dispatch(calculateResult(formData));
  };

  return (
    <div
      style={{
        position: "absolute",
        minHeight: "100vh",
        top: "0px",
        left: "0px",
        right: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="my-header-wrapper">
        <MyHeader />
      </div>

      <Container className="my-container">
        <Row style={{ height: "100%", maxWidth: "1000px", margin: "auto" }}>
          <Col xs={12} md={6} style={{ margin: "1rem 0rem" }}>
            <ScrollingPanel headerText="Parametri" showButton={false}>
              <InputForm onSubmit={onFormSubmit} />
            </ScrollingPanel>
          </Col>
          {/* <Col xs={0} md={0} lg={1} /> */}
          <Col xs={12} md={6} style={{ margin: "1rem 0rem" }}>
            <ScrollingPanel headerText="Rezultati" showButton={true}>
              <Results />
            </ScrollingPanel>
          </Col>
        </Row>
      </Container>

      <div style={{ flexShrink: "0" }}>
        <CreditsBar />
      </div>
    </div>
  );
};

export default App;
