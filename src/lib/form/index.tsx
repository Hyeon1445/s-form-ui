import {
  FormikForm,
  Formik,
  FormikHelpers,
  FormikProps,
  FormikValues,
} from "formik";
import { CSSProperties, ReactNode } from "react";
import * as yup from "yup";

const defaultStyle: CSSProperties = {
  width: "100%",
};

export type FormBoxProps<T> = {
  style?: CSSProperties;
  children: ReactNode | ((props: FormikProps<T>) => ReactNode);
  initialValues: T;
  validationSchema?: yup.Schema<T>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validateOnMount?: boolean;
  enableReinitialize?: boolean;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
};

const Form = <T extends FormikValues>({
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
      {(formikProps: FormikProps<T>) => (
        <FormikForm>
          <div style={{ ...defaultStyle, ...style }}>
            {typeof children === "function" ? children(formikProps) : children}
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
