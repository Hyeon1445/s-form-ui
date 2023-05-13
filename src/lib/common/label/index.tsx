import { CSSProperties, ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  fontSize: "10px",
  margin: "0.25rem 0",
  display: "inline-block",
};

const Label = ({ children, style = {} }: LabelProps) => {
  return <label style={{ ...defaultStyle, ...style }}>{children}</label>;
};

export default Label;
