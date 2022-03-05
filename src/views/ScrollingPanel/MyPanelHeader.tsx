import { Button } from "react-bootstrap";
import {
  selectHideOptional,
  setHideOptional,
} from "../../modules/hideOptionalSlice";
import { useAppDispatch, useAppSelector } from "../../modules/store";

const MyPanelHeader = ({
  text,
  showButton,
}: {
  text: string;
  showButton: boolean;
}) => {
  const dispatch = useAppDispatch();
  const hideOptional = useAppSelector(selectHideOptional);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5px",
        height: "31px",
      }}
    >
      <div>{text}</div>
      <div>
        {showButton ? (
          <Button
            type="button"
            onClick={() => dispatch(setHideOptional(!hideOptional))}
            size="sm"
          >
            {hideOptional ? "Prikaži detalje" : "Sakrij detalje"}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export { MyPanelHeader };
