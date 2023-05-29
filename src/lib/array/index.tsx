import { FieldArray as FormikFieldArray } from "formik";
import { ReactNode } from "react";
import ArrayProvider from "./ArrayContext";
import {
  InsertButton,
  MoveButton,
  PopButton,
  PushButton,
  RemoveButton,
  SwapButton,
  UnshiftButton,
} from "./Buttons";

type FieldArrayProps = {
  name: string;
  children: ReactNode;
};

const FieldArray = ({ name, children }: FieldArrayProps) => {
  return (
    <FormikFieldArray name={name}>
      {(arrayHelpers) => (
        <ArrayProvider arrayHelpers={arrayHelpers}>{children}</ArrayProvider>
      )}
    </FormikFieldArray>
  );
};

FieldArray.PushButton = PushButton;
FieldArray.SwapButton = SwapButton;
FieldArray.MoveButton = MoveButton;
FieldArray.InsertButton = InsertButton;
FieldArray.UnShiftButton = UnshiftButton;
FieldArray.RemoveButton = RemoveButton;
FieldArray.PopButton = PopButton;
FieldArray.ReplaceButton = RemoveButton;

export default FieldArray;
