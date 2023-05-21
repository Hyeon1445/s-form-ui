import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { CSSProperties, ReactNode } from "react";
import * as yup from "yup";

const defaultStyle: CSSProperties = {
  width: "100%",
};

export type FormBoxProps<T> = {
  style?: CSSProperties;
  children: ReactNode;
  initialValues: T;
  validationSchema?: yup.Schema<T>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validateOnMount?: boolean;
  enableReinitialize?: boolean;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
};

const FormBox = <T extends FormikValues>({
  style,
  children,
  initialValues,
  validationSchema,
  onSubmit,
  validateOnChange = true,
  validateOnBlur = true,
  validateOnMount = true,
  enableReinitialize = true,
}: FormBoxProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
      validationSchema={validationSchema}
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      validateOnMount={validateOnMount}
    >
      {(props) => (
        <Form>
          <div style={{ ...defaultStyle, ...style }}>{children}</div>
        </Form>
      )}
    </Formik>
  );
};

export default FormBox;
