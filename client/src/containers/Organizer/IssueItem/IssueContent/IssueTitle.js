import styled from 'styled-components';

const StyledIssueTitle = styled.div`
    color:lightgrey;
    font-weight: bold;
`;

export const IssueTitle = ({title}) =>{
    return(
        <StyledIssueTitle>
            {title}
        </StyledIssueTitle>
    )
}