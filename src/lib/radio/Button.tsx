import { FormikValues } from "formik";
import { CSSProperties, InputHTMLAttributes, useMemo } from "react";
import { useRadioContext } from "./RadioContext";

type ButtonProps = {
  style?: CSSProperties;
  checkedStyle?: CSSProperties;
  disabledStyle?: CSSProperties;
  disabledCheckedStyle?: CSSProperties;
  disabled?: boolean | ((values: FormikValues) => boolean);
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type | 'style">;

const defaultStyle: CSSProperties = {
  verticalAlign: "middle",
  appearance: "none",
  border: "2px solid #dbdbdb",
  borderRadius: "50%",
  width: "1.25rem",
  height: "1.25rem",
  cursor: "pointer",
};

const defaultCheckedStyle: CSSProperties = {
  ...defaultStyle,
  border: "0.4rem solid teal",
};

const defaultDisabledStyle: CSSProperties = {
  ...defaultStyle,
  border: "2px solid #dbdbdb",
  backgroundColor: "#f2f2f2",
  cursor: "not-allowed",
};

const defaultDisabledCheckedStyle: CSSProperties = {
  ...defaultStyle,
  border: "0.4rem solid #dbdbdb",
  cursor: "not-allowed",
};

const Button = ({
  disabled = false,
  style,
  checkedStyle,
  disabledStyle,
  disabledCheckedStyle,
  value,
  ...props
}: ButtonProps) => {
  const {
    fieldProps: {
      field,
      meta: { value: selectedValue },
      form: { setFieldValue, setFieldTouched },
    },
  } = useRadioContext();
  const checked = value === selectedValue;
  const radioStyle = useMemo(() => {
    if (disabled && checked)
      return { ...defaultDisabledCheckedStyle, ...disabledCheckedStyle };
    if (disabled && !checked)
      return { ...defaultDisabledStyle, ...disabledStyle };
    if (!disabled && checked)
      return { ...defaultCheckedStyle, ...checkedStyle };
    if (!disabled && !checked) return { ...defaultStyle, ...style };
  }, [checked, disabled]);

  return (
    <input
      {...field}
      {...props}
      type="radio"
      id={value?.toString()}
      value={value}
      checked={checked}
      style={radioStyle}
      onChange={() => {
        if (!disabled) {
          setFieldTouched(field.name, true);
          setFieldValue(field.name, value);
        }
      }}
    />
  );
};

export default Button;
