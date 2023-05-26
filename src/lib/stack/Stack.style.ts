import styled from "@emotion/styled";
import { StackProps } from ".";

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction === "col" && "column"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
`;
