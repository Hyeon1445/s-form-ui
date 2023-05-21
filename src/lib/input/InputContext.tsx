import { FieldProps } from "formik";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type InputValue = string | number | null;

type InputParams = {
  fieldProps: FieldProps;
  anchor: HTMLInputElement | null;
  setAnchor: Dispatch<SetStateAction<HTMLInputElement | null>>;
};

export const InputContext = createContext<InputParams | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
  fieldProps: FieldProps<InputValue>;
};

const InputProvider = ({ children, fieldProps }: ProviderProps) => {
  const [anchor, setAnchor] = useState<HTMLInputElement | null>(null);

  return (
    <InputContext.Provider value={{ fieldProps, anchor, setAnchor }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error("useInputContext must be used within a InputProvider");
  }
  return context;
};

export default InputProvider;
