import { FieldProps } from "formik";
import { ReactNode, createContext, useContext } from "react";

export type RadioValue = string | number | readonly string[] | undefined;

type RadioParams = {
  fieldProps: FieldProps;
  onChange?: (value?: RadioValue) => void;
};

export const RadioContext = createContext<RadioParams | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
  fieldProps: FieldProps<RadioValue>;
  onChange?: (value?: RadioValue) => void;
};

const RadioProvider = ({ children, fieldProps, onChange }: ProviderProps) => {
  return (
    <RadioContext.Provider value={{ fieldProps, onChange }}>
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
