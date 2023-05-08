import { FieldProps } from "formik";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type SelectValue = string | number | null;

type SelectParams = {
  fieldProps: FieldProps;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SelectContext = createContext<SelectParams | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
  fieldProps: FieldProps<SelectValue>;
};

const SelectProvider = ({ children, fieldProps }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <SelectContext.Provider value={{ fieldProps, isOpen, setIsOpen }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error("useBrandContext must be used within a BrandProvider");
  }
  return context;
};

export default SelectProvider;
