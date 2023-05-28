import { CSSProperties, ReactNode } from "react";
import Label from "../common/label";
import { Field, FieldProps } from "formik";
import CheckboxProvider from "./CheckboxContext";
import Button from "./Button";

type CheckboxProps = {
  name: string;
  disabled?: boolean;
  children?: ReactNode;
  label?: ReactNode;
  style?: CSSProperties;
  onChange?: (value?: boolean) => void;
};

const defaultStyle: CSSProperties = {
  display: "flex",
  gap: "0.25rem",
  fontSize: "14px",
  color: "#757575",
  alignItems: "center",
};

const Checkbox = ({
  name,
  disabled = false,
  children,
  label = "",
  style,
  onChange,
}: CheckboxProps) => {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps<boolean>) => (
        <CheckboxProvider
          fieldProps={fieldProps}
          disabled={disabled}
          onChange={onChange}
        >
          <label
            htmlFor={name}
            style={{
              cursor: disabled ? "not-allowed" : "pointer",
              ...defaultStyle,
              ...style,
            }}
          >
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

export default Checkbox;
