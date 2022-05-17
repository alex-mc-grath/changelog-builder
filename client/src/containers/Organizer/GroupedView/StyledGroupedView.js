import styled from 'styled-components';

export const StyledGroupedView = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    width: 100%;
    margin: 2rem auto;
    color:white;

    >ul{
        /* flex: 45%; */
        flex: 0 40%;
        /* color: ${props=>props.color} */
        /* flex-basis: 50% ; */
        /* padding-inline-start:0; */
        /* or - flex: 0 50% - or - flex-basis: 50% - */
  /*demo*/
  box-shadow: 0 0 0 1px black;
    }
`;