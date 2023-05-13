import styled from "@emotion/styled";

export const Button = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => disabled && "#f2f2f2"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge*/
  user-select: none;
`;