import React, { CSSProperties } from "react";
import { useSelectContext } from "./SelectContext";

export type SelectOptionsProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  position: "absolute",
  zIndex: 10,
  width: "100%",
  listStyleType: "none",
  borderRadius: "0.5rem",
  maxHeight: "10rem",
  overflowY: "auto",
  backgroundColor: "white",
  boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.2)",
};

const Options = ({ children, style }: SelectOptionsProps) => {
  const { isOpen } = useSelectContext();
  return isOpen ? (
    <ul style={{ ...defaultStyle, ...style }}>{children}</ul>
  ) : null;
};

export default Options;
