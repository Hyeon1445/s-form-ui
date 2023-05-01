import React, { cloneElement, useState } from "react";
import Option from "./Option";
import Options, { SelectOptionsProps } from "./Options";
import * as S from "./Select.style";
import { Field, FieldProps } from "formik";
import Button, { SelectButtonProps } from "./Button";

export type SelectProps = {
  name: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const Select = ({ disabled = false, name, children }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Field name={name}>
      {({
        field,
        form: { setFieldValue },
        meta: { error, touched, value },
      }: FieldProps) => (
        <S.Container>
          {React.Children.map(children, (child) => {
            if (
              React.isValidElement<SelectButtonProps>(child) &&
              child?.type === Select.Button
            )
              return cloneElement(child, {
                name,
                disabled,
                onClick: () => setIsOpen(!isOpen),
              });
            if (
              React.isValidElement<SelectOptionsProps>(child) &&
              child?.type === Select.Options
            )
              return isOpen ? cloneElement(child, { name }) : null;
            return child;
          })}
        </S.Container>
      )}
    </Field>
  );
};

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;

export default Select;
