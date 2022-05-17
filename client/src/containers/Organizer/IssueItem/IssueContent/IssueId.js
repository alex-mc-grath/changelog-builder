import styled from 'styled-components';

const StyledIssueId = styled.div`
    color: grey;
    text-transform: uppercase;
`

export const IssueId = ({id}) => {

 /*const firstThreeChars = id.substring(0,3)
 const secondThreeChars = id.substring(3,6)
  const modifiedText = firstThreeChars+'-'+secondThreeChars*/

  return (
    <StyledIssueId>{id}</StyledIssueId>
  )
}

