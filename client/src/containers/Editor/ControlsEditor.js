import React from 'react'
import styled from 'styled-components/macro';

const StyledControlsEditor = styled.div`
    display:flex;
    background: #292C6D;
    padding: 0.5rem 0.2rem;
    /* width: 100%; */

    i{
        /* color: #292C6D; */
        /* color: #0b0c28; */
        color:lightgrey;
        padding: 0.2rem 0.4rem;
    }
`;


export const ControlsEditor = () => {
  return (
    <StyledControlsEditor>
      <i className="fa-solid fa-bold"></i>
      <i className="fa-solid fa-italic"></i>
      {/* <i className="fa-solid fa-text-size"></i> */}
      <i className="fa-solid fa-list"></i>
      <i className="fa-solid fa-list-ol"></i>
      <i className="fa-solid fa-quote-right"></i>
    </StyledControlsEditor>
  )
}

