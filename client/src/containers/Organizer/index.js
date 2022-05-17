import { useEffect, useState, useRef, useMemo } from 'react';

import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { getAllIssues, getEntries } from './actions';

import { CustomRightClickMenu } from '../../components/utils/CustomRightClickMenu';
import { SideMenu } from './SideMenu/index';

import { OrganizeIssues } from './OrganizeIssuesView/OrganizeIssues';
import { GroupedView } from './GroupedView';

const StyledOrganizer = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

export const Organizer = () => {
  const dispatch = useDispatch();

  const issues = useSelector((state) => state.issuesList.issues);
  const groupColors = useSelector((state) => state.issuesList.groupColors);

  const [organizedIssues, setOrganizedIssues] = useState({ groups: []});
  const groups = useSelector((state) => state.issuesList.groups);

  const organizeIssues = () => {
    let groups = [];
    let other = {"name":"other", "color":"#C0C0C0", "issues":[]};
    let groupKeys = {}

    issues.forEach((issue) => {
      if (issue.labels.nodes.length == 0) {
        other.issues.push({ ...issue });
      } else {
        issue.labels.nodes.forEach((label) => {
          if (label.name in groupKeys) {
            groups[groupKeys[label.name]].issues.push({ ...issue })
          } else {
            groupKeys[label.name] = groups.length
            groups.push({"name":label.name, "color":label.color, "issues":[{ ...issue }]})
          }
        });
      }
    });

    if (other.issues.length > 0) {
      groups.push(other);
    }

    dispatch({ type: 'ISSUES_ORGANIZED', payload: {groups} });
  };

  const [sideMenuState, setSideMenuState] = useState(1);

  const userLogin = useSelector((state) => state.userLogin);

  const setIssues = (newIssues) => {
    dispatch({ type: 'ISSUES_LIST_SUCCESS', payload: { issues: newIssues } });
  };

  const setIssueOrder = (response) => {
    const fetchedIssues = response.issues;
    const order = response.order;

    let issueIdMap = {};
    fetchedIssues.forEach((issue) => {
      issueIdMap[issue.id] = issue;
    });

    let sortedIssues = [];

    order.forEach((issueID) => {
      if (issueID in issueIdMap) {
        sortedIssues.push(issueIdMap[issueID]);
        delete issueIdMap[issueID];
      }
    });

    let leftoverKeys = Object.keys(issueIdMap);
    leftoverKeys.forEach((key) => {
      sortedIssues.push(issueIdMap[key]);
    });

    setIssues(sortedIssues);
  };

  useEffect(() => {
    (async () => {
      if (userLogin.userInfo?.token && userLogin.pageLoaded) {
        let allIssues = await getAllIssues();
        if (!allIssues) {
          alert('Unable to fetch issues');
          return;
        }

        let allEntries = await getEntries();
        if (!allEntries) {
          allEntries = [];
          alert('Unable to fetch already published issues');
        }

        //remove all issues that don't matter

        let issueMap = {};
        allIssues.issues.forEach((issue) => {
          issueMap[issue.id] = issue;
        });

        allEntries.forEach((entry) => {
          Object.keys(entry.entry).forEach((groupName) => {
            entry.entry[groupName].issues.forEach((issue) => {
              if (issue.id in issueMap) {
                delete issueMap[issue.id];
              }
            });
          });
        });

        let remainingEntries = [];
        Object.keys(issueMap).forEach((id) => {
          remainingEntries.push(issueMap[[id]]);
        });

        setIssueOrder({ issues: remainingEntries, order: allIssues.order });
      }
    })();
  }, [userLogin]);

  useEffect(() => {
    if (issues.length > 0) {
      organizeIssues();
    }
  }, [issues]);

  return (
    <StyledOrganizer>
      <OrganizeIssues issues={issues} onOrderChange={setIssues} />
    </StyledOrganizer>
  );
};
