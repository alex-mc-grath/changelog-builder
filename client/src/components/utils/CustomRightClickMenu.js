import React,{useState, useEffect} from 'react'
import styled from 'styled-components/macro';

// https://www.pluralsight.com/guides/how-to-create-a-right-click-menu-using-react

const StyledMenu = styled.ul`
    display:flex;
    flex-direction:column;

    position: absolute;
    top:${props=>props.yPos}px;
    left:${props=>props.xPos}px;

    background: #fafafa;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding:0;

    opacity:${props=>props.opacity};
    transition: 2s opacity ease-in;

    li{
        padding:0.75rem;
        border-bottom: .7px solid lightgrey;

        &:hover{
            color: ${props=>props.theme.colors.quaternary};
            cursor:pointer;
            background: ${props=>props.theme.colors.tertiary};
        }
    }
`;
  
  export const CustomRightClickMenu = () => {

    const [pos, setPos] = useState({
        xPos: 0,
        yPos: 0,
        showMenu: false,
        opacity:0,
    })

      useEffect(()=>
        
          document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            setPos({xPos: event.pageX, yPos: event.pageY, showMenu: true, opacity:1})
          }),

          document.removeEventListener("contextmenu"),


          //close menu when left click EVERYWHERE ELSE than on the menu
          document.addEventListener("click", (event) => {
            event.preventDefault();
            setPos({...pos, showMenu: false})
            
          }
          ,[]))


    return (
        <>
            {pos.showMenu && (
                <StyledMenu yPos={pos.yPos} xPos={pos.xPos} opacity={pos.opacity}>
                    <li>Change Entry Type</li>
                    <li>Change Image Type</li>
                </StyledMenu>
            )
            }
        </>
    )
  }
  