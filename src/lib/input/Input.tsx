import { Field as FormikField, FieldProps } from "formik";
import { CSSProperties, ReactNode } from "react";
import Label from "../common/label";
import InputProvider from "./InputContext";
import Field from "./Field";
import ErrorMessage from "./ErrorMessage";
import Tooltip from "./Tooltip";

export type InputProps = {
  name: string;
  disabled?: boolean;
  style?: CSSProperties;
  placeholder?: string;
  type?: "text" | "password" | "number";
  children?: ReactNode;
};

const defaultStyle: CSSProperties = {
  position: "relative",
  width: "100%",
};

const Input = ({
  disabled = false,
  name,
  style,
  placeholder = "",
  type = "text",
  children,
}: InputProps) => {
  return (
    <FormikField name={name}>
      {(fieldProps: FieldProps<string | number>) => (
        <InputProvider fieldProps={fieldProps}>
          {!!children ? (
            <div style={{ ...defaultStyle, ...style }}>{children}</div>
          ) : (
            <div style={{ ...defaultStyle, ...style }}>
              <Field
                placeholder={placeholder}
                type={type}
                disabled={disabled}
              />
              <ErrorMessage />
            </div>
          )}
        </InputProvider>
      )}
    </FormikField>
  );
};

Input.Label = Label;
Input.Field = Field;
Input.ErrorMessage = ErrorMessage;
Input.Tooltip = Tooltip;

export default Input;
