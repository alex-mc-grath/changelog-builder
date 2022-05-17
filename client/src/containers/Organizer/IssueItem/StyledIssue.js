import styled from 'styled-components';

export const StyledIssue = styled.div`
display: flex;
flex: initial;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
padding: 1rem;

/* //no-text-highlight */
-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

/* >*{
    margin: auto 1rem;
} */

i {
    color:#292C6D;
}

>:not(:first-child){
    margin-left: 19px;
}


&:hover{
    background: #0b0c28;
    cursor:pointer;
}
`;
