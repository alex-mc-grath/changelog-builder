import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    scroll-behaviour: smooth;
    height: 100%;
    width: 100%;
    /* font-size: 62.5%;
    line-height: 1.5; */
  }

  body {
    /* font-family:'Utari'; */
    /* font-family:'Black Delights Font'; */
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
  }

  body.fontLoaded {
    /* font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    /* font-family:'Black Delights Font'; */
  }


button {
  cursor: pointer;
}

button:disabled {
  cursor: default;
}

a {
  text-decoration: none;
  color: black;
}

li{
  list-style-type:none;
}

.big-button{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 250px;
    height: 80px;
    border-radius: 55px;
    background: #292C6D;
    margin:auto;
    border: 2px solid transparent;
    transition: .8s all ease-out;
    color:white;

    &:hover{
    border: 2px solid #EC255A;
    color: ${props=>props.theme.colors.quaternary};
    cursor:pointer;
    transition: .3s all ease-in-out;
    }
}

.page-nav-button{
  display:flex;
  color:#292C6D;
  width:fit-content !important;
  font-size:1.4rem;
  margin-right:1rem;
  margin-left: auto;
  margin-top: 1rem;
  width:auto;
  justify-content:flex-end;
  align-items:center;
  transition: .8s all ease-out;
  border: none;
  background: transparent;

  &:hover{
    color: ${props=>props.theme.colors.quaternary};
    cursor:pointer;
    transition: .3s all ease-in-out;
    }
}


`;

export default GlobalStyle;
