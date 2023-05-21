import { CSSProperties } from "react";
import { useInputContext } from "./InputContext";

type ErrorMessageType = {
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  color: "red",
  fontSize: "0.75rem",
  margin: "0.25rem 0",
};

const ErrorMessage = ({ style }: ErrorMessageType) => {
  const {
    fieldProps: {
      meta: { touched, error },
    },
  } = useInputContext();
  return touched && error ? (
    <p style={{ ...defaultStyle, ...style }}>{error}</p>
  ) : null;
};

export default ErrorMessage;