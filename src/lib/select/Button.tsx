import { CSSProperties, ReactNode } from "react";
import * as S from "./Button.style";
import { useSelectContext } from "./SelectContext";
import { VStack } from "../stack";

export type SelectButtonProps = {
  disabled?: boolean;
  style?: CSSProperties;
  icon?: ReactNode;
};

const defaultStyle: CSSProperties = {
  border: "1px solid #dbdbdb",
  height: "2rem",
  width: "100%",
  padding: "0 0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "0.5rem",
  fontSize: "12px",
  backgroundColor: "white",
};

const Button = ({ disabled = false, style }: SelectButtonProps) => {
  const {
    fieldProps: {
      meta: { value, error, touched },
    },
    isOpen,
    setIsOpen,
    setAnchor,
  } = useSelectContext();
  return (
    <VStack>
      <S.Button
        style={{ ...defaultStyle, ...style }}
        disabled={disabled}
        ref={setAnchor}
        type="button"
        onClick={() => {
          if (disabled) return;
          setIsOpen(!isOpen);
        }}
      >
        <p>{value}</p>
        <S.ArrowIcon isOpen={isOpen}>▾</S.ArrowIcon>
      </S.Button>
    </VStack>
  );
};

export default Button;
