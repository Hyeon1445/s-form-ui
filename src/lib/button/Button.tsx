import { CSSProperties, ReactNode } from 'react'
import * as S from './Button.style'

const defaultStyle: CSSProperties = {
  width: '10rem',
  height: '2rem',
  background: 'teal',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '8px',
}

export type ButtonProps = {
  children: ReactNode
  style?: CSSProperties
  type?: 'reset' | 'submit' | 'button'
}

const Button = ({ children, style, type = 'submit' }: ButtonProps) => {
  return (
    <S.Container style={{ ...defaultStyle, ...style }} type={type}>
      {children}
    </S.Container>
  )
}

export default Button
