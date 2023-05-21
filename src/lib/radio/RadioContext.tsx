import { FieldProps } from "formik";
import { ReactNode, createContext, useContext } from "react";

export type RadioValue = string | number | null;

type RadioParams = {
  fieldProps: FieldProps;
};

export const RadioContext = createContext<RadioParams | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
  fieldProps: FieldProps<RadioValue>;
};

const RadioProvider = ({ children, fieldProps }: ProviderProps) => {
  return (
    <RadioContext.Provider value={{ fieldProps }}>
      {children}
    </RadioContext.Provider>
  );
};

export const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (context === undefined) {
    throw new Error("useRadioContext must be used within a RadioProvider");
  }
  return context;
};

export default RadioProvider;
