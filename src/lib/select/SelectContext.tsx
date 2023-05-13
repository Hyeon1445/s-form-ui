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
  anchor: HTMLButtonElement | null;
  setAnchor: Dispatch<SetStateAction<HTMLButtonElement | null>>;
};

export const SelectContext = createContext<SelectParams | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
  fieldProps: FieldProps<SelectValue>;
};

const SelectProvider = ({ children, fieldProps }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

  return (
    <SelectContext.Provider
      value={{ fieldProps, isOpen, setIsOpen, anchor, setAnchor }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }
  return context;
};

export default SelectProvider;
