import { CSSProperties, ReactNode } from "react";
import * as S from "./Button.style";
import { useSelectContext } from "./SelectContext";

export type SelectButtonProps = {
  disabled?: boolean;
  style?: CSSProperties;
  icon?: ReactNode;
};

const defaultStyle: CSSProperties = {
  border: "2px solid #dbdbdb",
  height: "2rem",
  width: "100%",
  padding: "0 0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "0.5rem",
  fontSize: "12px",
};

const Button = ({ disabled = false, style }: SelectButtonProps) => {
  const {
    fieldProps: {
      meta: { value },
    },
    isOpen,
    setIsOpen,
  } = useSelectContext();
  return (
    <S.Button
      style={{ ...defaultStyle, ...style }}
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        setIsOpen(!isOpen);
      }}
    >
      <p>{value}</p>
      <span>▾</span>
    </S.Button>
  );
};

export default Button;
