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
  anchor: HTMLButtonElement | null;
  setAnchor: Dispatch<SetStateAction<HTMLButtonElement | null>>;
};

export const InputContext = createContext<InputParams | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
  fieldProps: FieldProps<InputValue>;
};

const InputProvider = ({ children, fieldProps }: ProviderProps) => {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

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
