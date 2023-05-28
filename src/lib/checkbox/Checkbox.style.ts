import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const HiddenInput = styled.input`
  display: none;
`;

export const Check = styled.label<{
  isSelected: boolean;
  disabled: boolean;
  size: CSSProperties["width"];
  color: CSSProperties["backgroundColor"];
  borderColor: CSSProperties["borderColor"];
  disabledColor: CSSProperties["backgroundColor"];
  disabledBorderColor: CSSProperties["borderColor"];
  borderRadius: CSSProperties["borderRadius"];
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected, color, disabledColor, disabled }) =>
    (!isSelected && "white") ||
    (isSelected && disabled && disabledColor) ||
    (isSelected && !disabled && color)};
  color: white;
  font-size: ${({ size }) => `calc((${size} - 2px) * 0.75)`};
  width: ${({ size }) => `calc(${size} - 2px)`};
  height: ${({ size }) => `calc(${size} - 2px)`};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 1px solid
    ${({
      isSelected,
      disabled,
      color,
      borderColor,
      disabledColor,
      disabledBorderColor,
    }) =>
      (isSelected && !disabled && color) ||
      (!isSelected && !disabled && borderColor) ||
      (isSelected && disabled && disabledColor) ||
      (!isSelected && disabled && disabledBorderColor)};
`;
