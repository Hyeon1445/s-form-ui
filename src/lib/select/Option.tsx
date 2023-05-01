import React from "react";
import * as S from "./Options.style";

export type SelectOptionProps = {
  children?: React.ReactNode;
};

const Option = ({ children }: SelectOptionProps) => {
  return <ul>{children}</ul>;
};

export default Option;
