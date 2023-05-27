import { CSSProperties, InputHTMLAttributes, useMemo } from "react";
import { useInputContext } from "./InputContext";
import * as S from "./Field.style";

type InputFieldProps = {
  style?: CSSProperties;
  disabledStyle?: CSSProperties;
  errorStyle?: CSSProperties;
  type?: "text" | "number" | "password" | "color";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const defaultStyle: CSSProperties = {
  height: "2rem",
  width: "100%",
  borderRadius: "0.5rem",
  padding: "0 0.5rem",
  fontSize: "12px",
  border: "1px solid #dbdbdb",
  backgroundColor: "white",
  color: "black",
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

const Field = ({
  style,
  disabledStyle,
  errorStyle,
  type = "text",
  ...props
}: InputFieldProps) => {
  const { fieldProps, setAnchor } = useInputContext();
  const { error, touched } = fieldProps.meta;
  const commonStyle = { ...defaultStyle, ...style };
  const inputStyle: CSSProperties = useMemo(() => {
    if (props.disabled)
      return {
        ...commonStyle,
        ...defaultDisabledStyle,
        ...disabledStyle,
      };
    if (touched && error)
      return { ...commonStyle, ...defaultErrorStyle, ...errorStyle };
    return commonStyle;
  }, [disabledStyle, error, errorStyle, style, props.disabled, touched]);

  return (
    <S.StyledInputField
      {...props}
      {...fieldProps.field}
      type={type}
      ref={setAnchor}
      style={inputStyle}
      hasError={!!(error && touched)}
    />
  );
};

export default Field;
