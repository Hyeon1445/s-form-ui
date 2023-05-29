import { ButtonHTMLAttributes, CSSProperties, MouseEvent } from "react";
import { useArrayContext } from "./ArrayContext";
import Button from "../button";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  disabledStyle?: CSSProperties;
};

type OnClickType<T> = (
  event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  value?: T
) => void;

const defaultStyle: CSSProperties = {
  width: "4rem",
  height: "2rem",
  fontSize: "12px",
};

export const BaseButton = ({
  children,
  style,
  disabledStyle,
  ...props
}: ButtonProps) => {
  return (
    <Button
      {...props}
      type="button"
      disabledStyle={{
        ...defaultStyle,
        ...disabledStyle,
      }}
      style={{
        ...defaultStyle,
        backgroundColor: "#00808060",
        ...style,
      }}
    >
      {children}
    </Button>
  );
};

export const PushButton = ({
  value,
  children,
  onClick,
  ...props
}: { value: any } & ButtonProps) => {
  const {
    arrayHelpers: { push },
  } = useArrayContext();
  return (
    <BaseButton
      {...props}
      onClick={(event) => {
        push(value);
        onClick && onClick(event);
      }}
    >
      {children ?? <span>push</span>}
    </BaseButton>
  );
};

export const SwapButton = ({
  index1,
  index2,
  onClick,
  children,
  ...props
}: { index1: number; index2: number } & ButtonProps) => {
  const {
    arrayHelpers: { swap },
  } = useArrayContext();
  return (
    <BaseButton
      {...props}
      onClick={(event) => {
        swap(index1, index2);
        onClick && onClick(event);
      }}
    >
      {children ?? <span>swap</span>}
    </BaseButton>
  );
};

export const MoveButton = ({
  from,
  to,
  onClick,
  children,
  ...props
}: { from: number; to: number } & ButtonProps) => {
  const {
    arrayHelpers: { move },
  } = useArrayContext();
  return (
    <BaseButton
      {...props}
      onClick={(event) => {
        move(from, to);
        onClick && onClick(event);
      }}
    >
      {children ?? <span>move</span>}
    </BaseButton>
  );
};

export const InsertButton = ({
  index,
  value,
  onClick,
  children,
  ...props
}: { index: number; value: any } & ButtonProps) => {
  const {
    arrayHelpers: { insert },
  } = useArrayContext();
  return (
    <BaseButton
      {...props}
      onClick={(event) => {
        insert(index, value);
        onClick && onClick(event);
      }}
    >
      {children ?? <span>insert</span>}
    </BaseButton>
  );
};

export const UnshiftButton = ({
  value,
  onClick,
  children,
  ...props
}: { onClick?: OnClickType<number>; value: any } & Omit<
  ButtonProps,
  "onClick"
>) => {
  const {
    arrayHelpers: { unshift },
  } = useArrayContext();
  return (
    <BaseButton
      {...props}
      onClick={(event) => {
        const length = unshift(value);
        onClick && onClick(event, length);
      }}
    >
      {children ?? <span>unshift</span>}
    </BaseButton>
  );
};

export const RemoveButton = ({
  index,
  onClick,
  children,
  ...props
}: { index: number; onClick?: OnClickType<any> } & Omit<
  ButtonProps,
  "onClick"
>) => {
  const {
    arrayHelpers: { remove },
  } = useArrayContext();
  return (
    <BaseButton
      {...props}
      onClick={(event) => {
        const value = remove(index);
        onClick && onClick(event, value);
      }}
    >
      {children ?? <span>remove</span>}
    </BaseButton>
  );
};

export const PopButton = ({
  onClick,
  children,
  ...props
}: Omit<ButtonProps, "onClick"> & { onClick?: OnClickType<any> }) => {
  const {
    arrayHelpers: { pop },
  } = useArrayContext();
  return (
    <BaseButton
      {...props}
      onClick={(event) => {
        const value = pop();
        onClick && onClick(event, value);
      }}
    >
      {children ?? <span>pop</span>}
    </BaseButton>
  );
};

export const ReplaceButton = ({
  index,
  value,
  onClick,
  children,
  ...props
}: { index: number; value: any } & ButtonProps) => {
  const {
    arrayHelpers: { replace },
  } = useArrayContext();
  return (
    <BaseButton
      {...props}
      onClick={(event) => {
        replace(index, value);
        onClick && onClick(event);
      }}
    >
      {children ?? <span>replace</span>}
    </BaseButton>
  );
};
