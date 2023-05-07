import React, { CSSProperties } from "react";
import * as S from "./Button.style";

export type SelectButtonProps = {
  name?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
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

const Button = ({
  name,
  onClick,
  disabled = false,
  isOpen,
  children,
  style,
}: SelectButtonProps) => {
  return (
    <S.Button
      style={{ ...defaultStyle, ...style }}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {children}
      <span>▾</span>
    </S.Button>
  );
};

export default Button;
