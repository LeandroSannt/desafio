import React from 'react'

import { Container } from './styles'
import { ClockLoader } from 'react-spinners'
const Loader: React.FC = () => {
  return (
    <Container>
      <ClockLoader color="#8ab4f8" />
    </Container>
  )
}
export { Loader }
