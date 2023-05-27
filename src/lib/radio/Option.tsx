import { FormikValues } from "formik";
import React, { CSSProperties, ReactNode, cloneElement, useMemo } from "react";
import { useRadioContext } from "./RadioContext";
import Radio from ".";

type OptionProps = {
  children: ReactNode;
  style?: CSSProperties;
  checkedStyle?: CSSProperties;
  disabledStyle?: CSSProperties;
  disabledCheckedStyle?: CSSProperties;
  disabled?: boolean | ((values: FormikValues) => boolean);
  value?: string | number | readonly string[];
};

const defaultStyle: CSSProperties = {
  display: "flex",
  gap: "0.5rem",
  fontSize: "14px",
  cursor: "pointer",
};

const defaultCheckedStyle: CSSProperties = {
  ...defaultStyle,
  fontWeight: "bold",
  cursor: "pointer",
};

const defaultDisabledStyle: CSSProperties = {
  ...defaultStyle,
  color: "#dbdbdb",
  cursor: "not-allowed",
};

const defaultDisabledCheckedStyle: CSSProperties = {
  ...defaultStyle,
  color: "#dbdbdb",
  fontWeight: "bold",
  cursor: "not-allowed",
};

const Option = ({
  disabled = false,
  style,
  checkedStyle,
  disabledStyle,
  disabledCheckedStyle,
  value,
  children,
}: OptionProps) => {
  const {
    fieldProps: {
      field: { name },
      meta: { value: selectedValue },
      form: { setFieldValue, setFieldTouched },
    },
  } = useRadioContext();
  const checked = value === selectedValue;
  const radioOptionStyle = useMemo(() => {
    if (disabled && checked)
      return { ...defaultDisabledCheckedStyle, ...disabledCheckedStyle };
    if (disabled && !checked)
      return { ...defaultDisabledStyle, ...disabledStyle };
    if (!disabled && checked)
      return { ...defaultCheckedStyle, ...checkedStyle };
    if (!disabled && !checked) return { ...defaultStyle, ...style };
  }, [disabled, checked]);

  return (
    <label
      style={radioOptionStyle}
      onClick={() => {
        if (!disabled) {
          setFieldTouched(name, true);
          setFieldValue(name, value);
        }
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio.Button) {
          return cloneElement(child, { ...child.props, value, disabled });
        }
        return child;
      })}
    </label>
  );
};

export default Option;
