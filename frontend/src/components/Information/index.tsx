import React from 'react'

import { Container } from './styles'
import { InformationProps } from '../../pages/Google/details'

const Information: React.FC<InformationProps> = ({ snippet, link, title }) => {
  return (
    <Container>
      <a target="_blank" href={link}>
        {title}
      </a>

      <p>{snippet}</p>
    </Container>
  )
}
export { Information }
