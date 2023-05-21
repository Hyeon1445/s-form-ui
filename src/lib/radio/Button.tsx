import { FormikValues } from "formik";
import { CSSProperties, InputHTMLAttributes } from "react";
import * as S from "./Button.style";

type ButtonProps = {
  size?: CSSProperties["width"];
  color?: CSSProperties["color"];
  disabled?: boolean | ((values: FormikValues) => boolean);
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;

const Button = ({
  size = "1rem",
  color = "teal",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Container>
      <input {...props} type="radio" />
    </S.Container>
  );
};

export default Button;
