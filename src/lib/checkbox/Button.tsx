import { CSSProperties, InputHTMLAttributes } from "react";
import Label from "../common/label";
import * as S from "./Checkbox.style";
import { useCheckboxContext } from "./CheckboxContext";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | "type"
  | "placeholder"
  | "disabled"
  | "onChange"
  | "value"
  | "size"
  | "checked"
  | "style"
> & {
  size?: CSSProperties["width"];
  color?: CSSProperties["backgroundColor"];
  borderColor?: CSSProperties["borderColor"];
  disabledColor?: CSSProperties["backgroundColor"];
  disabledBorderColor?: CSSProperties["borderColor"];
  borderRadius?: CSSProperties["borderRadius"];
};

const Checkbox = ({
  size = "1.25rem",
  color = "teal",
  borderColor = "#757575",
  disabledColor = "#dbdbdb",
  disabledBorderColor = "#dbdbdb",
  borderRadius = "0.25rem",
  ...inputProps
}: CheckboxProps) => {
  const {
    fieldProps: {
      meta: { value },
      field: { name },
      form: { setFieldTouched, setFieldValue },
    },
    onChange,
    disabled,
  } = useCheckboxContext();
  return (
    <span className="no-select">
      <S.HiddenInput
        {...inputProps}
        type="checkbox"
        id={name}
        onChange={() => {
          if (!disabled) {
            setFieldTouched(name, true);
            setFieldValue(name, !value, !onChange);
            onChange && onChange(!value);
          }
        }}
      />
      <S.Check
        htmlFor={name}
        isSelected={value}
        disabled={disabled}
        size={size}
        color={color}
        borderColor={borderColor}
        disabledColor={disabledColor}
        disabledBorderColor={disabledBorderColor}
        borderRadius={borderRadius}
      >
        ✓
      </S.Check>
    </span>
  );
};

Checkbox.Label = Label;

export default Checkbox;
