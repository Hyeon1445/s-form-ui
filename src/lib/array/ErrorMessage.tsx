import { CSSProperties } from "react";
import { useArrayContext } from "./ArrayContext";
import { ErrorMessage as FormikErrorMessage, Field, FieldProps } from "formik";

type ErrorMessageType = {
  style?: CSSProperties;
};

const defaultStyle: CSSProperties = {
  color: "red",
  fontSize: "0.75rem",
  margin: "0.5rem 0",
};

const ErrorMessage = ({ style }: ErrorMessageType) => {
  const {
    arrayHelpers: { name },
  } = useArrayContext();
  return (
    <Field name={name}>
      {({ meta }: FieldProps<any>) => {
        return meta.error && meta.touched ? (
          <p style={{ ...defaultStyle, ...style }}>{meta.error}</p>
        ) : null;
      }}
    </Field>
  );
};

export default ErrorMessage;
