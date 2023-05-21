import styled from "@emotion/styled";
import { CSSProperties } from "react";

export type StyledStackProps = {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: string;
  height?: string;
  background?: string;
  margin?: string;
  padding?: string;
  gap?: string;
};

export const Stack = styled.div<StyledStackProps & { isVStack?: boolean }>`
  display: flex;
  flex-direction: ${({ isVStack }) => isVStack && "column"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
`;
