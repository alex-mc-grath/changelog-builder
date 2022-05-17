import React, { useState } from 'react'
import {StyledSideMenu} from './StyledSideMenu'
import styled, {keyframes} from 'styled-components';


const StyledColoringEffect = styled.span`
     span {
    position: relative;
    opacity: 0;
    /* animation: moveText 0.75s forwards; */
    background-color: #FFFFFF;
    color: pink;
  }
`


const coloringEffect = (text) =>{
   return  text
//   text.split("").map(function(char, index){
//     const style = `animationDelay: (0.5 + index / 10) + "s"`;
//     return <span
//         aria-hidden="true"
//         key={index}
//         style={{style}}>
//         {char}
//            </span>;
//   }

//   )
}



// return 'test'

//   text.split("").map(function(char, index){
//     const style = {"animation-delay": (0.5 + index / 10) + "s"};
//     return <span
//         aria-hidden="true"
//         key={index}
//         style={style}>
//         {char}
//     </span>;
// })

// }


export const SideMenu = ({sideMenuState, setSideMenuState}) => {

    return (
      <StyledSideMenu>
        <li onClick={()=>setSideMenuState(1)} className={`${sideMenuState === 1 ? 'active' : ''}`}><i className={`fa-solid fa-layer-group`}></i> &nbsp;
        Import and Organize issues
        
        {/* <StyledColoringEffect>{coloringEffect('Import and Organize issues')}</StyledColoringEffect> */}
        </li>
        <li onClick={()=>setSideMenuState(2)} className={`${sideMenuState === 2 ? 'active' : ''}`}><i className="fa-solid fa-object-ungroup"></i> &nbsp;Grouped View</li>
      </StyledSideMenu>
    )
  }
  