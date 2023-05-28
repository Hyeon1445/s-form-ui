import { CSSProperties, ReactNode, useCallback } from "react";
import Label from "../common/label";
import { Field, FieldProps } from "formik";
import CheckboxProvider from "./CheckboxContext";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

type CheckboxProps = {
  name: string;
  disabled?: boolean;
  children?: ReactNode;
  label?: ReactNode;
  style?: CSSProperties;
  checkedStyle?: CSSProperties;
  disabledStyle?: CSSProperties;
  disabledCheckedStyle?: CSSProperties;
  onChange?: (value?: boolean) => void;
};

const defaultStyle: CSSProperties = {
  display: "flex",
  gap: "0.5rem",
  fontSize: "14px",
  cursor: "pointer",
  alignItems: "center",
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

const Checkbox = ({
  name,
  disabled = false,
  children,
  label = "",
  style,
  checkedStyle,
  disabledStyle,
  disabledCheckedStyle,
  onChange,
}: CheckboxProps) => {
  const commonStyle = { ...defaultStyle, ...style };
  const getStyle = useCallback(
    (checked: boolean) => {
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
    },
    [disabled]
  );
  return (
    <Field name={name}>
      {(fieldProps: FieldProps<boolean>) => (
        <CheckboxProvider
          fieldProps={fieldProps}
          disabled={disabled}
          onChange={onChange}
        >
          <label htmlFor={name} style={getStyle(fieldProps.meta.value)}>
            {children ?? (
              <>
                <Button />
                <span>{label}</span>
              </>
            )}
          </label>
        </CheckboxProvider>
      )}
    </Field>
  );
};

Checkbox.Label = Label;
Checkbox.Button = Button;
Checkbox.ErrorMessage = ErrorMessage;

export default Checkbox;
