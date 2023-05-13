import { Field, FieldProps } from "formik";
import { CSSProperties } from "react";
import * as S from "./Input.style";
import Label from "../common/label";
import ErrorMessage from "../common/error-message";
import { VStack } from "../stack";

export type InputProps = {
  name: string;
  disabled?: boolean;
  style?: CSSProperties;
  placeholder?: string;
  type?: "text" | "password" | "number";
  hasErrorMessage?: boolean;
};

const defaultStyle: CSSProperties = {
  height: "2rem",
  width: "100%",
};

const Input = ({
  disabled = false,
  name,
  style,
  placeholder = "",
  type = "text",
  hasErrorMessage = true,
}: InputProps) => {
  return (
    <Field name={name}>
      {({
        field,
        form: { setFieldValue },
        meta: { error, touched, value },
      }: FieldProps<string | number>) => (
        <VStack>
          <S.StyledInput
            {...field}
            style={{ ...defaultStyle, ...style }}
            value={value}
            hasError={!!touched && !!error}
            disabled={disabled}
            placeholder={placeholder}
            type={type}
          />
          {hasErrorMessage && touched && <ErrorMessage>{error}</ErrorMessage>}
        </VStack>
      )}
    </Field>
  );
};

Input.Label = Label;

export default Input;
