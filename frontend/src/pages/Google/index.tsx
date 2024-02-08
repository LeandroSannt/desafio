import React, { FormEvent, useState } from 'react'

import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'

const Google: React.FC = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${search}`)
  }

  return (
    <Container>
      <main>
        <h1>Google</h1>

        <form onSubmit={onSubmit}>
          <Input
            onChange={e => {
              setSearch(e.target.value)
            }}
          />
        </form>
      </main>
    </Container>
  )
}
export { Google }
