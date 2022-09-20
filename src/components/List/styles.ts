import styled from 'styled-components'

interface IPROPS_CONTAINER{
  done?: boolean
}

export const Container = styled.div<IPROPS_CONTAINER>`
  padding: 0 15px;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0 ;
  flex-basis: 320px;
  opacity: ${({done}) => done ? 0.4 : 1};

  & + div {
    border-left: 1px solid rgba(0,0,0,0.05)
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2{
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px
    }

    button{
      height: 42px;
      width: 42px;
      border-radius: 18px;
      background-color: #3b5bfd;
      border:0;
      cursor: pointer
    }
  }

  ul{
      margin-top: 30px;
  }
`