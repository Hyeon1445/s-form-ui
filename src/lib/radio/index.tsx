import { Field, FieldProps } from "formik";
import { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import RadioProvider from "./RadioContext";
import Label from "../common/label";
import Button from "./Button";
import Option from "./Option";

export type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "style"
> & {
  name: string;
  children: ReactNode;
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
};

const Radio = ({ name, children, style }: RadioProps) => {
  return (
    <Field id={name} name={name}>
      {(fieldProps: FieldProps<string>) => (
        <RadioProvider fieldProps={fieldProps}>
          <div style={{ ...defaultStyle, ...style }}>{children}</div>
        </RadioProvider>
      )}
    </Field>
  );
};

Radio.Label = Label;
Radio.Button = Button;
Radio.Option = Option;

export default Radio;
