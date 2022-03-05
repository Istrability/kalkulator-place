import React from "react";
import { Card } from "react-bootstrap";

import { MyPanelHeader } from "./MyPanelHeader";
import "./ScrollingPanel.css";
import { onScrollCallbacks } from "./scrollingPanelUtils";

const ScrollingPanel = ({ headerText, children, showButton }: any) => {
  /* componentDidMount() {
    // HACK FOR hiding tooltips on inputs container scroll, because of bug.
    const scrollPanel = document.getElementsByClassName("panel-body")[0];

    scrollPanel.onscroll = () => {
      onScrollCallbacks.forEach((callback) => {
        callback();
      });
    }; 
  }*/

  return (
    <Card>
      <Card.Header style={{ padding: "0px", height: "100%" }}>
        <MyPanelHeader text={headerText} showButton={showButton} />
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export { ScrollingPanel };
