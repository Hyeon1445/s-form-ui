import { Field, FieldProps } from "formik";
import { CSSProperties, ReactNode } from "react";
import RadioProvider from "./RadioContext";
import Label from "../common/label";

export type RadioProps = {
  name: string;
  children: ReactNode;
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  display: "flex",
  gap: "0.5rem",
};

const Radio = ({ name, children, style }: RadioProps) => {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps<string>) => (
        <RadioProvider fieldProps={fieldProps}>
          <div style={{ ...defaultStyle, ...style }}>{children}</div>
        </RadioProvider>
      )}
    </Field>
  );
};

Radio.Label = Label;

export default Radio;
