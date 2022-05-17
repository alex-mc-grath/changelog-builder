import {StyledIssue} from './StyledIssue'

import { IssueId } from './IssueContent/IssueId'

import { IssueTitle } from './IssueContent/IssueTitle'

import { Spacer } from './IssueContent/Spacer'

import { Description } from './IssueContent/Description'

import { CreatedAt } from './IssueContent/CreatedAt'

import { Label } from './IssueContent/Label'


export const IssueItem = ({issue}) =>{
    
    const { id, identifier, title, description, createdAt, labels} = issue

    return (
        <StyledIssue>
            <i className="fa-solid fa-circle-check"></i>
            <IssueId id={identifier} />
            <IssueTitle title={title} />
                { labels.nodes.map(({id, color, title, name}) => <Label key={id} color={color}>{name}</Label>) }
            <Description description={description} />
            <Spacer />
            <CreatedAt createdAt={createdAt} />
        </StyledIssue>
    )
}