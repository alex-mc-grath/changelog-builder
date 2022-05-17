import { Link } from 'react-router-dom';
import SortableList from '../../../components/theme/controls/SortableList';

import { saveIssueOrder } from '../actions';

import { IssueItem } from '../IssueItem';
import styled from 'styled-components/macro';

const StyledOrganizeIssues = styled.div`
  .error {
    width: fit-content;
    font-size: 2rem;
    g: white;
    margin: 2rem auto;
    margin-left: 3rem;
  }
`;

export const OrganizeIssues = ({ issues, onOrderChange }) => {
  const orderChangeCallback = ({ keyOrder, orderedData }) => {
    //TODO: save in db as async to not stall (do not await)
    //saveIssueOrder(keyOrder);
    //onOrderChange(orderedData);
  };

  return (
    <StyledOrganizeIssues>
      {issues.length == 0 && <p className="error">All issues have already been published.</p>}
      {issues.length > 0 && (
        <>
          <SortableList
            orderChangeCallback={orderChangeCallback}
            items={issues.map((issue) => {
              return { key: issue.id, item: <IssueItem issue={issue} />, data: issue };
            })}
          />
        </>
      )}
    </StyledOrganizeIssues>
  );
};
