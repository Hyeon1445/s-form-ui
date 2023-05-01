import React from "react";
import * as S from "./Options.style";

export type SelectOptionsProps = {
  name?: string;
  children?: React.ReactNode;
};

const Options = ({ name, children }: SelectOptionsProps) => {
  return <li>{children}</li>;
};

export default Options;
