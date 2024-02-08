import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;

  border-radius: 30px;
  padding: 15px;
  display: flex;
  align-items: center;
  transition: 400ms;

  &:hover {
    box-shadow: 0 10px 15px -3px black;
  }

  input {
    min-width: 400px;
    outline: none;
    border: none;
    margin-left: 10px;
  }
`
