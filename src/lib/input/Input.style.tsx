import styled from "@emotion/styled";

export const StyledInput = styled.input<{
  hasError: boolean;
  disabled: boolean;
}>`
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  padding: 0 0.5rem;
  font-size: 12px;
  border: ${({ hasError, disabled }) =>
    disabled
      ? "1px solid #757575"
      : hasError
      ? "1px solid red"
      : "1px solid black"};
  &:focus-visible {
    outline: ${({ hasError, disabled }) =>
      disabled
        ? "1px #757575 auto"
        : hasError
        ? "0.5px red auto"
        : "0.5px black auto"};
  }
  background-color: ${({ disabled }) => (disabled ? "#dbdbdb" : "#ffffff")};
`;
