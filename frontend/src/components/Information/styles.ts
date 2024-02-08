import styled from 'styled-components'

export const Container = styled.div`
  a {
    font-size: 24px;
    font-weight: 500;
    color: #8ab4f8;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 18px;
    color: gray;
    font-weight: 300;
  }

  & + & {
    margin-top: 20px;
  }
`
