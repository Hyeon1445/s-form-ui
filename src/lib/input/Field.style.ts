import styled from "@emotion/styled";

export const StyledInputField = styled.input<{ hasError?: boolean }>`
  &:focus-visible {
    outline: ${({ hasError }) => (hasError ? "0" : "0.5px solid black")};
  }
`;
