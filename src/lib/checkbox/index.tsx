import { CSSProperties, InputHTMLAttributes } from "react";
import Label from "../common/label";
import * as S from "./Checkbox.style";
import { Field, FieldProps } from "formik";
import CheckboxProvider from "./CheckboxContext";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | "type"
  | "placeholder"
  | "disabled"
  | "onChange"
  | "value"
  | "size"
  | "checked"
  | "style"
> & {
  name: string;
  disabled?: boolean;
  size?: CSSProperties["width"];
  color?: CSSProperties["backgroundColor"];
  borderColor?: CSSProperties["borderColor"];
  disabledColor?: CSSProperties["backgroundColor"];
  disabledBorderColor?: CSSProperties["borderColor"];
  borderRadius?: CSSProperties["borderRadius"];
};

const Checkbox = ({
  name,
  disabled = false,
  size = "1.25rem",
  color = "teal",
  borderColor = "#757575",
  disabledColor = "#dbdbdb",
  disabledBorderColor = "#dbdbdb",
  borderRadius = "0.25rem",
  ...inputProps
}: CheckboxProps) => {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps<boolean>) => (
        <CheckboxProvider fieldProps={fieldProps}>
          <span className="no-select">
            <S.HiddenInput
              {...inputProps}
              type="checkbox"
              id={name}
              onChange={() => {
                if (!disabled) {
                  fieldProps.form.setFieldTouched(name, true);
                  fieldProps.form.setFieldValue(name, !fieldProps.meta.value);
                }
              }}
            />
            <S.Check
              htmlFor={name}
              isSelected={fieldProps.meta.value}
              disabled={disabled}
              size={size}
              color={color}
              borderColor={borderColor}
              disabledColor={disabledColor}
              disabledBorderColor={disabledBorderColor}
              borderRadius={borderRadius}
            >
              ✓
            </S.Check>
          </span>
        </CheckboxProvider>
      )}
    </Field>
  );
};

Checkbox.Label = Label;

export default Checkbox;
