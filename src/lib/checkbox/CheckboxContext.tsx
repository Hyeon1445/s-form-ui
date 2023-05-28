import { FieldProps } from "formik";
import { ReactNode, createContext, useContext } from "react";

type CheckboxParams = {
  fieldProps: FieldProps;
};

export const CheckboxContext = createContext<CheckboxParams | undefined>(
  undefined
);

type ProviderProps = {
  children?: ReactNode;
  fieldProps: FieldProps<boolean>;
};

const CheckboxProvider = ({ children, fieldProps }: ProviderProps) => {
  return (
    <CheckboxContext.Provider value={{ fieldProps }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  if (context === undefined) {
    throw new Error(
      "useCheckboxContext must be used within a CheckboxProvider"
    );
  }
  return context;
};

export default CheckboxProvider;
