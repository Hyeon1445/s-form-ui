import React, { CSSProperties } from "react";
import Option from "./Option";
import Options from "./Options";
import { Field, FieldProps } from "formik";
import Button from "./Button";
import SelectProvider, { SelectValue } from "./SelectContext";

export type SelectProps = {
  name: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const defaultStyle: CSSProperties = {
  position: "relative",
};

const Select = ({ disabled = false, name, children }: SelectProps) => {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps<SelectValue>) => (
        <SelectProvider fieldProps={fieldProps}>
          <div style={{ ...defaultStyle }}>{children}</div>
        </SelectProvider>
      )}
    </Field>
  );
};

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;

export default Select;
