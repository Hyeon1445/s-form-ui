import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { Stack, StyledStackProps } from "./Stack.style";

type StackProps = StyledStackProps & {
  children?: ReactNode;
};

const HStack = ({ children, ...props }: StackProps) => {
  return <Stack {...props}>{children}</Stack>;
};

const VStack = ({ children, ...props }: StackProps) => {
  return (
    <Stack {...props} isVStack>
      {children}
    </Stack>
  );
};

export { VStack, HStack };
