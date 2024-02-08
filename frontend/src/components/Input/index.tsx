import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'
import { FaSearch } from 'react-icons/fa'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <FaSearch color="gray" />
      <input
        {...rest}
        type="text"
        placeholder="Pesquise no Google ou escreva um URL"
      />
    </Container>
  )
}
export { Input }
