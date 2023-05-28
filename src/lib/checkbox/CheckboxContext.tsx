import { FieldProps } from "formik";
import { ReactNode, createContext, useContext, useState } from "react";

type CheckboxParams = {
  fieldProps: FieldProps;
  disabled: boolean;
  onChange?: (value: boolean) => void;
};

export const CheckboxContext = createContext<CheckboxParams | undefined>(
  undefined
);

type ProviderProps = {
  children?: ReactNode;
  fieldProps: FieldProps<boolean>;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
};

const CheckboxProvider = ({
  children,
  fieldProps,
  disabled = false,
  onChange,
}: ProviderProps) => {
  return (
    <CheckboxContext.Provider value={{ fieldProps, disabled, onChange }}>
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
