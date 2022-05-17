import {useMemo} from 'react'
import {StyledGroupedView} from './StyledGroupedView'
import styled from 'styled-components'

const Label = styled.h3`
    margin:0;
    margin-bottom: 1rem;
    color: ${props=>props.color};
`;

const GroupItem = styled.li`
    
`;

const Group = styled.ul`
    border: 2px solid ${props=>props.color};
    border-radius:25px;
    padding: 2rem; 
    min-width: 30%; 
    width: auto; 
    margin: 1rem;
    width: 100%;
`;

export const GroupedView = ({issues, groups, colors}) => {

    return (
    <StyledGroupedView>
        {/* Grouped view by labels */}

        {Object.keys(groups).map(groupName => (
            <Group color={colors[groupName]} key={"group_"+groupName}>
                <Label color={colors[groupName]}>{groupName}</Label>
                {groups[groupName].map(issue => <GroupItem key={groupName+"_"+issue.id}>{issue.title}</GroupItem>)}
            </Group>
        ))}

    </StyledGroupedView>
    )
}