import { VStack } from '@components/common/stack'
import { Field, FieldProps } from 'formik'
import { CSSProperties } from 'react'
import * as S from './Input.style'

export type InputProps = {
  name: string
  disabled?: boolean
  style?: CSSProperties
  placeholder?: string
}

const defaultStyle: CSSProperties = {
  height: '2rem',
  width: '100%',
}

const Input = ({
  disabled = false,
  name,
  style,
  placeholder = '',
}: InputProps) => {
  return (
    <Field name={name}>
      {({
        field,
        form: { setFieldValue },
        meta: { error, touched, value },
      }: FieldProps) => (
        <VStack gap="0.25rem">
          <S.StyledInput
            {...field}
            style={{ ...defaultStyle, ...style }}
            value={value}
            hasError={!!touched && !!error}
            disabled={disabled}
            placeholder={placeholder}
          />
          <S.ErrorMessage>{!!touched && error}</S.ErrorMessage>
        </VStack>
      )}
    </Field>
  )
}

export default Input
