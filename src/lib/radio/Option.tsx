import { FormikValues } from "formik";
import React, { CSSProperties, ReactNode, cloneElement, useMemo } from "react";
import { RadioValue, useRadioContext } from "./RadioContext";
import Radio from ".";

type OptionProps = {
  children: ReactNode;
  style?: CSSProperties;
  checkedStyle?: CSSProperties;
  disabledStyle?: CSSProperties;
  disabledCheckedStyle?: CSSProperties;
  disabled?: boolean | ((values: FormikValues) => boolean);
  value?: RadioValue;
  onChange?: (value?: RadioValue) => void;
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
  color: "#dbdbdb",
  cursor: "not-allowed",
};

const defaultDisabledCheckedStyle: CSSProperties = {
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
  onChange,
}: OptionProps) => {
  const {
    fieldProps: {
      field: { name },
      meta: { value: selectedValue },
      form: { setFieldValue, setFieldTouched },
    },
  } = useRadioContext();
  const checked = value === selectedValue;
  const commonStyle = { ...defaultStyle, ...style };
  const radioOptionStyle = useMemo(() => {
    if (disabled && checked)
      return {
        ...commonStyle,
        ...defaultDisabledCheckedStyle,
        ...disabledCheckedStyle,
      };
    if (disabled && !checked)
      return { ...commonStyle, ...defaultDisabledStyle, ...disabledStyle };
    if (!disabled && checked)
      return { ...commonStyle, ...defaultCheckedStyle, ...checkedStyle };
    if (!disabled && !checked) return commonStyle;
  }, [disabled, checked]);

  return (
    <label
      style={radioOptionStyle}
      onClick={() => {
        if (!disabled) {
          setFieldTouched(name, true);
          setFieldValue(name, value, !onChange);
          onChange && onChange(value);
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
