import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

const StyledHeader = styled.div`
  background: #161636;
  color: #67666a;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;

  span {
    margin-left: 2rem;
  }
`;


const H3 = styled.h3`
    font-size: 1.3rem;
    margin-bottom: 0.25em;
    text-transform: uppercase;
    font-weight: 500;
    /* width: fit-content !important; */
    background: ${props=>props.theme.colors.secondary};
    color: #161636;
    opacity: 0.9;
    border-radius: 0 125px 125px 0;
    width:fit-content;
    padding: 0.3rem 4rem;
    padding-right:2.5rem;
    margin:0;
    margin-right: auto;
    margin-left: 0rem;


  .colored-wonderfully{
    background:
        linear-gradient(pink, transparent),
        linear-gradient(to top left, blue, transparent),
        linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    margin:0;
    padding:0;

    transition: 0.2s all ease-in-out;

  }
  &:hover{
        
        cursor:pointer;
        color: white;


        .colored-wonderfully{
            background:
        linear-gradient(black, transparent),
        linear-gradient(to top left, black, transparent),
        linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
            
            padding: 0 .3rem;
            transition: 0.4s all ease-in-out;
        }
    }

`;

const Header = ({layout}) => {

    const navigate = useNavigate()

    let toReturn = [];

    if(layout.logo)
    {
        layout.logo.forEach(item => {
            if(item.text)
            {
                toReturn.push(<span key={"theme_header_logo_text"}>{item.text}</span>);
            }
        })
    }

    return (
        <StyledHeader>
            {/* {toReturn} */}
            <H3 style={{"display":"inline-block"}} onClick={() => navigate("/changelog")}>Changel<span className="colored-wonderfully">o</span>g T<span className="colored-wonderfully">oo</span>l</H3>
        </StyledHeader>
    );
};

export default Header;