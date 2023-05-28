import { FormikValues } from "formik";
import { CSSProperties, InputHTMLAttributes, useMemo } from "react";
import { useRadioContext } from "./RadioContext";

type ButtonProps = {
  style?: CSSProperties;
  checkedStyle?: CSSProperties;
  disabledStyle?: CSSProperties;
  disabledCheckedStyle?: CSSProperties;
  disabled?: boolean | ((values: FormikValues) => boolean);
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type | 'style" | "onChange"
>;

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
  border: "0.4rem solid teal",
};

const defaultDisabledStyle: CSSProperties = {
  border: "2px solid #dbdbdb",
  backgroundColor: "#f2f2f2",
  cursor: "not-allowed",
};

const defaultDisabledCheckedStyle: CSSProperties = {
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
    onChange,
  } = useRadioContext();
  const commonStyle = { ...defaultStyle, ...style };
  const checked = value === selectedValue;
  const radioStyle = useMemo(() => {
    if (disabled && checked)
      return {
        ...commonStyle,
        ...defaultDisabledCheckedStyle,
        ...disabledCheckedStyle,
      };
    if (disabled && !checked)
      return { ...commonStyle, ...defaultDisabledStyle, ...disabledStyle };
    if (!disabled && checked)
      return { ...commonStyle, ...defaultCheckedStyle, ...checkedStyle };
    if (!disabled && !checked) return commonStyle;
  }, [checked, disabled]);

  return (
    <input
      {...field}
      {...props}
      type="radio"
      value={value}
      checked={checked}
      style={radioStyle}
      onChange={() => {
        if (!disabled) {
          setFieldTouched(field.name, true);
          setFieldValue(field.name, value, !onChange);
          onChange && onChange(value);
        }
      }}
    />
  );
};

export default Button;
