import { CSSProperties, InputHTMLAttributes, useMemo } from "react";
import { useInputContext } from "./InputContext";
import * as S from "./Field.style";

type InputFieldProps = {
  style?: CSSProperties;
  disabledStyle?: CSSProperties;
  errorStyle?: CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

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
  ...defaultStyle,
  border: "1px solid #dbdbdb",
  backgroundColor: "#f2f2f2",
  color: "#757575",
};

const defaultErrorStyle: CSSProperties = {
  ...defaultStyle,
  border: "1px solid red",
};

const Field = ({
  style,
  disabledStyle,
  errorStyle,
  ...props
}: InputFieldProps) => {
  const { fieldProps, setAnchor } = useInputContext();
  const { error, touched } = fieldProps.meta;
  const inputStyle: CSSProperties = useMemo(() => {
    if (props.disabled) return { ...defaultDisabledStyle, ...disabledStyle };
    if (touched && error) return { ...defaultErrorStyle, ...errorStyle };
    return { ...defaultStyle };
  }, [disabledStyle, error, errorStyle, props.disabled, touched]);

  return (
    <S.StyledInputField
      {...props}
      {...fieldProps.field}
      ref={setAnchor}
      style={inputStyle}
      hasError={!!(error && touched)}
    />
  );
};

export default Field;
