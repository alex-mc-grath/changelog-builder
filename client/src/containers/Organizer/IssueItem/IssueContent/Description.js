import styled from 'styled-components';

const StyledIssueDescription = styled.div`
    color:#292C6D;
`;

export const Description = ({description}) =>{
    return(
        <StyledIssueDescription>
            {description}
        </StyledIssueDescription>
    )
}