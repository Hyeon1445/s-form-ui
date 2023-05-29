import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import * as S from "./Button.style";

const defaultStyle: CSSProperties = {
  width: "10rem",
  height: "2rem",
  backgroundColor: "teal",
  color: "white",
  fontWeight: "bold",
  borderRadius: "8px",
};

const defaultDisabledStyle: CSSProperties = {
  backgroundColor: "#dbdbdb",
  cursor: "not-allowed",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  disabledStyle?: CSSProperties;
  type?: "reset" | "submit" | "button";
};

const Button = ({
  children,
  style,
  disabledStyle,
  type = "submit",
  ...buttonProps
}: ButtonProps) => {
  const commonStyle = { ...defaultStyle, ...style };
  const buttonStyle = buttonProps.disabled
    ? { ...commonStyle, ...defaultDisabledStyle, ...disabledStyle }
    : commonStyle;
  return (
    <S.Container {...buttonProps} style={buttonStyle} type={type}>
      {children}
    </S.Container>
  );
};

export default Button;
