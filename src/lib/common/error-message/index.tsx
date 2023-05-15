import { CSSProperties, ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  color: "red",
  fontSize: "12px",
  padding: "0.25rem 0",
};
const ErrorMessage = ({ children, style }: ErrorMessageProps) => {
  return <p style={{ ...defaultStyle, ...style }}>{children}</p>;
};

export default ErrorMessage;
