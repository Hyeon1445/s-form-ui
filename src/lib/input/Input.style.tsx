import styled from '@emotion/styled'

export const StyledInput = styled.input<{
  hasError: boolean
  disabled: boolean
}>`
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  padding: 0 0.5rem;
  font-size: 12px;
  border: ${({ hasError, disabled }) =>
    disabled
      ? '2px solid #757575'
      : hasError
      ? '2px solid red'
      : '2px solid black'};
  &:focus-visible {
    outline: ${({ hasError, disabled }) =>
      disabled
        ? '1px #757575 auto'
        : hasError
        ? '1px red auto'
        : '1px teal auto'};
  }
  background-color: ${({ disabled }) => (disabled ? '#dbdbdb' : '#ffffff')};
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`
