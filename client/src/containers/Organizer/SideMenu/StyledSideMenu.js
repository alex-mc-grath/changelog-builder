import styled from 'styled-components';

export const StyledSideMenu = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content: center;
    background: ${props=>props.theme.colors.secondary};
    width:100%;
    min-height:92vh;
    padding: 0;
    margin:0;

    li{
      font-weight: bold;
      margin: .8rem auto;
      margin-right:auto;
      margin-left:1.5rem;
      cursor: pointer;

      &.active{
        background:
        linear-gradient(pink, transparent),
        linear-gradient(to top left, darkblue, transparent),
        linear-gradient(to top right, pink, transparent);
    background-blend-mode: screen;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
      }

      &:hover{
        color: ${props=>props.theme.colors.quaternary}
      }
    }
`;
