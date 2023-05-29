import styled from "@emotion/styled";

export const Container = styled.button<{ disabled?: boolean }>`
  &:hover {
    opacity: ${({ disabled }) => !disabled && "0.8"};
  }
`;
