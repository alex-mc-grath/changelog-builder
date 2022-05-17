// import styled from 'styled-components';

// import {StyledIssue} from './StyledIssue'

// import { IssueId } from './IssueId'

// import { IssueTitle } from './IssueTitle'

// import { Spacer } from './Spacer'

// export const IssueItem = ({issue}) =>{

//     const { id, title, description, labels, createdAt} = issue

//     const formattedCreatedAt = createdAt.substring(0,7)

//     return(
//         <StyledIssue>
//             <i className="fa-solid fa-circle-check"></i>
//             <IssueId id={id} />
//             <IssueTitle title={title} />
//             {/* {labels} */}
//             <div style={{color:'#292C6D'}}>{description}</div>
//             <Spacer />
//             <div style={{color:'#292C6D'}}>{formattedCreatedAt}</div>
            
//             {/* <IssueDescription /> */}
//         </StyledIssue>
//     )
// }