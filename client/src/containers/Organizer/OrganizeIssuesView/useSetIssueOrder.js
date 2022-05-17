import { useState } from 'react'

export const useSetIssueOrder = (response) => {

  
    const [issuesState,setIssuesState] = useState([])
    
    const fetchedIssues = response.issues
    const order = response.order

    let issueIdMap = {};
    fetchedIssues.forEach(issue => {
      issueIdMap[issue.id] = issue
    });

    let sortedIssues = []

    order.forEach(issueID => {
      if(issueID in issueIdMap)
      {
        sortedIssues.push(issueIdMap[issueID])
        delete issueIdMap[issueID]
      }
    });

    let leftoverKeys = Object.keys(issueIdMap)
    leftoverKeys.forEach(key => {
      sortedIssues.push(issueIdMap[key])
    })

    // setIssues(sortedIssues)
    setIssuesState(sortedIssues)


    return {issuesState}
  }
