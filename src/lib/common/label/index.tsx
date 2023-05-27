import { CSSProperties, ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  fontSize: "12px",
  margin: "0.5rem 0",
  display: "inline-block",
};

const Label = ({ children, style = {} }: LabelProps) => {
  return <p style={{ ...defaultStyle, ...style }}>{children}</p>;
};

export default Label;
