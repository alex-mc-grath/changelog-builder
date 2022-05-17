import styled from 'styled-components';

const StyledIssueCreatedAt = styled.div`
    color:#292C6D;
`;

export const CreatedAt = ({createdAt}) =>{

    const formattedCreatedAt = createdAt.substring(0,7)
    return(
        <StyledIssueCreatedAt>
            {formattedCreatedAt}
        </StyledIssueCreatedAt>
    )
}