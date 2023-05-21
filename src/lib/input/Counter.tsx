import { CSSProperties } from "react";
import { useInputContext } from "./InputContext";

type CounterProps = {
  style?: CSSProperties;
  max?: number;
  format?: (count: number, max?: number) => string;
};

const defaultStyle: CSSProperties = {
  fontSize: "12px",
  color: "#757575",
  margin: "0.5rem 0",
};

const Counter = ({ style, max = 0, format }: CounterProps) => {
  const {
    fieldProps: {
      meta: { value },
    },
  } = useInputContext();
  return (
    <p style={{ ...defaultStyle, ...style }}>
      {!!format ? format(value?.length, max) : `${value?.length} / ${max}`}
    </p>
  );
};

export default Counter;
