import { VStack } from "../stack";
import { Field, FieldProps } from "formik";
import { CSSProperties } from "react";
import * as S from "./Input.style";

export type InputProps = {
  name: string;
  disabled?: boolean;
  style?: CSSProperties;
  placeholder?: string;
  type?: "text" | "password" | "number";
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
}: InputProps) => {
  return (
    <Field name={name}>
      {({
        field,
        form: { setFieldValue },
        meta: { error, touched, value },
      }: FieldProps<string | number>) => (
        <VStack gap="0.25rem">
          <S.StyledInput
            {...field}
            style={{ ...defaultStyle, ...style }}
            value={value}
            hasError={!!touched && !!error}
            disabled={disabled}
            placeholder={placeholder}
            type={type}
          />
          <S.ErrorMessage>{!!touched && error}</S.ErrorMessage>
        </VStack>
      )}
    </Field>
  );
};

export default Input;
