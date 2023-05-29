import { Field, FieldProps } from "formik";
import { CSSProperties, ReactNode } from "react";
import RadioProvider, { RadioValue } from "./RadioContext";
import Label from "../common/label";
import Button from "./Button";
import Option from "./Option";
import ErrorMessage from "./ErrorMessage";

export type RadioProps = {
  name: string;
  children: ReactNode;
  style?: CSSProperties;
  onChange?: (value?: RadioValue) => void;
};

const defaultStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const Radio = ({ name, children, style, onChange }: RadioProps) => {
  return (
    <Field id={name} name={name}>
      {(fieldProps: FieldProps<RadioValue>) => (
        <RadioProvider fieldProps={fieldProps} onChange={onChange}>
          <div style={{ ...defaultStyle, ...style }}>{children}</div>
        </RadioProvider>
      )}
    </Field>
  );
};

Radio.Label = Label;
Radio.Button = Button;
Radio.Option = Option;
Radio.ErrorMessage = ErrorMessage;

export default Radio;
