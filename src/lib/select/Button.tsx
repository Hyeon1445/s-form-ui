import { CSSProperties, ReactNode, useMemo } from "react";
import * as S from "./Button.style";
import { useSelectContext } from "./SelectContext";

export type SelectButtonProps = {
  disabled?: boolean;
  style?: CSSProperties;
  disabledStyle?: CSSProperties;
  errorStyle?: CSSProperties;
  icon?: ReactNode;
};

const defaultStyle: CSSProperties = {
  border: "1px solid #dbdbdb",
  height: "2rem",
  width: "100%",
  padding: "0 0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "0.5rem",
  fontSize: "12px",
  backgroundColor: "white",
};

const defaultDisabledStyle: CSSProperties = {
  border: "1px solid #dbdbdb",
  backgroundColor: "#f2f2f2",
  color: "#757575",
  cursor: "not-allowed",
};

const defaultErrorStyle: CSSProperties = {
  border: "1px solid red",
};

const Button = ({
  style,
  icon,
  disabledStyle,
  errorStyle,
}: SelectButtonProps) => {
  const {
    fieldProps: {
      meta: { value, touched, error },
    },
    isOpen,
    setIsOpen,
    setAnchor,
    disabled,
  } = useSelectContext();
  const commonStyle = { ...defaultStyle, ...style };
  const buttonStyle: CSSProperties = useMemo(() => {
    if (disabled)
      return { ...commonStyle, ...defaultDisabledStyle, ...disabledStyle };
    if (touched && error)
      return { ...commonStyle, ...defaultErrorStyle, ...errorStyle };
    return commonStyle;
  }, [disabled, disabledStyle, error, errorStyle, style, touched]);
  return (
    <S.Button
      style={buttonStyle}
      ref={setAnchor}
      type="button"
      onClick={() => {
        if (disabled) return;
        setIsOpen(!isOpen);
      }}
    >
      <p>{value}</p>
      {icon ?? <S.ArrowIcon isOpen={isOpen}>▾</S.ArrowIcon>}
    </S.Button>
  );
};

export default Button;
