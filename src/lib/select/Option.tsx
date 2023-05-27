import React, { CSSProperties, useMemo, useState } from "react";
import { SelectValue, useSelectContext } from "./SelectContext";

export type SelectOptionProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
  value: SelectValue;
  hoverStyle?: CSSProperties;
  selectedOptionStyle?: CSSProperties;
  onChange?: (value?: SelectValue) => void;
};

const defaultStyle: CSSProperties = {
  padding: "0.5rem",
  fontSize: "12px",
  cursor: "pointer",
};

const defaultHoverStyle: CSSProperties = {
  backgroundColor: "#00808030",
};

const defaultSelectedStyle: CSSProperties = {
  backgroundColor: "#00808090",
  color: "white",
  fontWeight: "bold",
};

const Option = ({
  children,
  style,
  value,
  onChange,
  hoverStyle,
  selectedOptionStyle,
}: SelectOptionProps) => {
  const {
    fieldProps: {
      field: { name, value: selectedValue },
      form: { setFieldValue },
    },
    setIsOpen,
  } = useSelectContext();
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const commonStyle = { ...defaultStyle, ...style };
  const optionStyle = useMemo(() => {
    if (selectedValue === value)
      return {
        ...commonStyle,
        ...defaultSelectedStyle,
        ...selectedOptionStyle,
      };
    if (isMouseOver)
      return { ...commonStyle, ...defaultHoverStyle, ...hoverStyle };
    return commonStyle;
  }, [selectedValue, isMouseOver, hoverStyle, selectedOptionStyle, value]);

  return (
    <li
      style={{ ...defaultStyle, ...optionStyle }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
      onClick={() => {
        setFieldValue(name, value, !onChange);
        setIsOpen(false);
        onChange && onChange(value);
      }}
    >
      {children}
    </li>
  );
};

export default Option;
