import React, { FormEvent, useState } from 'react'
import api from '../../services/api'
import { useQuery } from 'react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Information } from '../../components/Information'
import { Loader } from '../../components/Loader'
import { Header, Search, Informations } from './styles'

export interface InformationProps {
  title: string
  snippet: string
  link: string
}

const Details: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const queryValue = searchParams.get('q')
  const [search, setSearch] = useState(queryValue || '')
  const [results, setResults] = useState<InformationProps[]>([])

  const fetchData = async (search: string) => {
    try {
      const response = await api.get('google', {
        params: { search: search.replace(/\s+/g, '') }
      })

      setResults(response.data)

      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${search}`)
    await fetchData(search)
  }

  const { isLoading } = useQuery(['branchs'], async () => {
    await fetchData(search)
  })

  return (
    <>
      <Search>
        <Header>
          <h1>Google</h1>
          <form onSubmit={onSubmit}>
            <Input
              defaultValue={queryValue || ''}
              onChange={e => {
                setSearch(e.target.value)
              }}
            />
          </form>
        </Header>
      </Search>

      {isLoading ? (
        <Loader />
      ) : (
        <Informations>
          {results?.map(item => (
            <Information key={item.title} {...item} />
          ))}
        </Informations>
      )}
    </>
  )
}
export { Details }
