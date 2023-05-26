import { CSSProperties, ReactNode } from "react";
import * as S from "./Stack.style";

export type StackProps = {
  children?: ReactNode;
  direction?: "row" | "col";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: string;
  height?: string;
  background?: string;
  margin?: string;
  padding?: string;
  gap?: string;
};

const Stack = ({ children, ...props }: StackProps) => {
  return <S.Stack {...props}>{children}</S.Stack>;
};

export default Stack;
