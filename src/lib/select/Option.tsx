import React, { CSSProperties, useMemo, useState } from "react";
import { SelectValue, useSelectContext } from "./SelectContext";
import styled from "@emotion/styled";

export type SelectOptionProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  value: SelectValue;
  hoverStyle?: CSSProperties;
  selectedOptionStyle?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  padding: "0.5rem",
  fontSize: "12px",
  cursor: "pointer",
};

const Option = ({
  children,
  style,
  value,
  hoverStyle = { ...style, backgroundColor: "#00808030" },
  selectedOptionStyle = {
    ...style,
    backgroundColor: "#00808090",
    color: "white",
    fontWeight: "bold",
  },
}: SelectOptionProps) => {
  const {
    fieldProps: {
      field: { name, value: selectedValue },
      form: { setFieldValue },
    },
    setIsOpen,
  } = useSelectContext();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const optionStyle = useMemo(() => {
    if (selectedValue === value) return selectedOptionStyle;
    if (isMouseOver) return hoverStyle;
    return defaultStyle;
  }, [selectedValue, isMouseOver, hoverStyle, selectedOptionStyle, value]);

  return (
    <li
      style={{ ...defaultStyle, ...optionStyle }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
      onClick={() => {
        setFieldValue(name, value);
        setIsOpen(false);
      }}
    >
      {children}
    </li>
  );
};

export default Option;
