import styled from 'styled-components/macro';

export const StyledEditor = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  margin:auto;
  border-radius:2px;
    background: white;
    overflow:auto;
    min-height: 90vh;

    >div{
      display:flex;
      flex-direction:column;
      width:auto;
      min-width: 600px;
      margin:0 auto;
      padding:0;

    }

    input{
      font-size:1rem;
      margin: .4rem auto;
    width:90%;
    margin-left: .2rem;
    cursor:pointer;

    &:active,&:focus{
      outline:none;
    }

    }

    button.control{
      border:none;
      color: grey;
      background: none;
      padding:0;
      margin:0;
      width: 15px;
      height:15px;
      margin-right: .2rem;

      &:hover{
        background: lightgrey;
        color:white;
        border-radius:50% 50%;

      }
    }
`;
