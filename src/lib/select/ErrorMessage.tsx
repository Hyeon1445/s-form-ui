import { CSSProperties } from "react";
import { useSelectContext } from "./SelectContext";

type ErrorMessageType = {
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  color: "red",
  fontSize: "0.75rem",
  margin: "0.5rem 0",
};

const ErrorMessage = ({ style }: ErrorMessageType) => {
  const {
    fieldProps: {
      meta: { touched, error },
    },
  } = useSelectContext();
  return touched && error ? (
    <p style={{ ...defaultStyle, ...style }}>{error}</p>
  ) : null;
};

export default ErrorMessage;
