import React, { CSSProperties } from "react";
import Option from "./Option";
import Options from "./Options";
import { Field, FieldProps } from "formik";
import Button from "./Button";
import SelectProvider, { SelectValue } from "./SelectContext";
import Label from "../common/label";
import ErrorMessage from "./ErrorMessage";

export type SelectProps = {
  name: string;
  disabled?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  position: "relative",
};

const Select = ({ disabled = false, name, children, style }: SelectProps) => {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps<SelectValue>) => (
        <SelectProvider fieldProps={fieldProps} disabled={disabled}>
          <div style={{ ...defaultStyle, ...style }}>{children}</div>
        </SelectProvider>
      )}
    </Field>
  );
};

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;
Select.Label = Label;
Select.ErrorMessage = ErrorMessage;

export default Select;
