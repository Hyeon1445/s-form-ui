import { FieldArrayRenderProps } from "formik";
import { ReactNode, createContext, useContext } from "react";

export type ArrayValue = string | number | readonly string[] | undefined;

type ArrayParams = {
  arrayHelpers: FieldArrayRenderProps;
};

export const ArrayContext = createContext<ArrayParams | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
  arrayHelpers: FieldArrayRenderProps;
};

const ArrayProvider = ({ children, arrayHelpers }: ProviderProps) => {
  return (
    <ArrayContext.Provider value={{ arrayHelpers }}>
      {children}
    </ArrayContext.Provider>
  );
};

export const useArrayContext = () => {
  const context = useContext(ArrayContext);
  if (context === undefined) {
    throw new Error("useArrayContext must be used within a ArrayProvider");
  }
  return context;
};

export default ArrayProvider;
