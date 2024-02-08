import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  main {
    width: 500px;
    margin-top: 5%;

    form > div {
      background-color: white;

      border-radius: 30px;
      padding: 15px;
      display: flex;
      align-items: center;
    }

    h1 {
      text-align: center;
      font-size: 100px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      outline: none;
      border: none;
      margin-left: 10px;
    }
  }
`

export const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 40px 0;

  h1 {
    margin-right: 20px;
  }
`

export const Informations = styled.div`
  margin: 0 auto;
  max-width: 1000px;

  margin-top: 20px;
`

export const Search = styled.div`
  border-bottom: solid gray 1px;
`
