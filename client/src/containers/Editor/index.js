import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { ControlsEditor } from './ControlsEditor';
import { SplitScreen } from '../../components/theme/layout/SplitScreen';

import { LeftSideEditor } from './LeftSideEditor';
import { RightSideEditor } from './RightSideEditor';

import { CustomRightClickMenu } from '../../components/utils/CustomRightClickMenu';
import { StyledEditor } from './StyledEditor';

import SortableList from '../../components/theme/controls/SortableList';

import { publishEntry } from './actions';
import { Loader } from '../../components/theme/base/Loader';
import { Organizer } from '../Organizer';

import changeArrayIndex from '../../utils/dataManipulation/changeArrayIndex'

const StyledEntry = styled.div`
  position: relative;
  display: flex;
  ${(props) =>
    props.entryType === 'issue' &&
    css`
      font-size: 3rem;
    `}

  ${(props) =>
    props.entryType === 'label' &&
    css`
      font-size: 3rem;
    `}

    :active, :focus {
    outline: none;
  }

  input {
    position: relative;
    width: fit-content;
    margin: auto;
    letter-spacing: 0px;
    border: 0.5px dotted black;
    padding: 0.2rem;

    ${(props) =>
      props.entryType === 'issue' &&
      css`
        font-size: 1.2rem;
      `}

    ${(props) =>
      props.entryType === 'label' &&
      css`
        font-size: 3rem;
        font-weight: bold;
      `}
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledIssue = styled.div`
  i {
    display: none;
  }

  span {
    display: inline;
  }

  &:hover {
    i {
      cursor: pointer;
      display: inline;
      color: lightgrey;
    }

    span {
      display: none;
    }
  }

  form {
    display: inline-block;
    width: 85%;
  }

  input {
    width: 100%;
  }
`;

const StyledGroup = styled.div`
  h3 {
    color: ${({ color }) => color || 'darkgray'};
  }

  .arrow {
    color:#ddd;
    cursor: pointer;

    &:hover {
      color:#bbb;
    }
  }
`;

const Entry = () => {
  const [entryState, setEntryState] = useState('issueEntry');

  if (entryState === 'issueEntry') {
    return (
      <>
        <button onClick={() => setEntryState('issueEntry')}>issueEntry</button>
        <button onClick={() => setEntryState('labelEntry')}>issueLabel</button>
        <StyledEntry text="test" entryType="issue">
          <input type="text" text="test" />
        </StyledEntry>
        {entryState}
      </>
    );
  } else if (entryState === 'labelEntry') {
    return (
      <>
        <button onClick={() => setEntryState('issueEntry')}>issueEntry</button>
        <button onClick={() => setEntryState('labelEntry')}>issueLabel</button>
        <StyledEntry text="test" entryType="label">
          <input type="text" text="test" />
        </StyledEntry>
        {entryState}
      </>
    );
  }
};

const Issue = ({ data, onDelete, onExtract, onNameChange, index }) => {
  const [editState, setEditState] = useState(false);
  const [value, setValue] = useState(data.title);
  const inputRef = useRef();

  const saveEdit = () => {
    setEditState(false);
    onNameChange({ value, index });
  };

  const onEditClick = () => {
    setEditState(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveEdit();
  };

  return (
    <StyledIssue>
      <i className="fa-solid fa-arrow-up-right-from-square" onClick={() => onExtract(data.id)}></i> <i className="fa-solid fa-trash-can" onClick={() => onDelete(data.id)}></i>{' '}
      {editState && (
        <>
          <i className="fa-solid fa-check" onClick={saveEdit}></i>{' '}
        </>
      )}
      {!editState && <i className="fa-solid fa-pencil" onClick={onEditClick}></i>}
      <span style={{ paddingLeft: '48.5px' }}>&nbsp;</span>{' '}
      {editState && (
        <form onSubmit={onSubmit}>
          <input ref={inputRef} type="text" value={value} onChange={({ target }) => setValue(target.value)} placeholder="issue text" autoFocus />
        </form>
      )}
      {!editState && <>{value || '--issue--'}</>}
    </StyledIssue>
  );
};

const Group = ({ groupName, issues, onNewGroup, groupColor, onGroupChange, onDown, onUp }) => {

  const toDelete = (issueID) => {
    let newState = [...issues];

    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === issueID) {
        newState.splice(i, 1);
        break;
      }
    }

    onGroupChange(newState);
  };

  const issueMoved = (index) => {
    let newState = [...issues];
    newState.splice(index, 1);
    onGroupChange(newState);
  }

  const addIssue = () => {

    let newState = [...issues];
    newState.push({ id: Date.now().toString() + Math.floor(Math.random() * 100000), title: '' });

    onGroupChange(newState);
  };

  const addGroup = (issueID) => {
    let newState = [...issues];
    let foundIssue = null;

    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === issueID) {
        foundIssue = newState[i].title;
        newState.splice(i, 1);
        break;
      }
    }

    if (foundIssue) {
      onNewGroup(foundIssue);
      onGroupChange(newState);
    }
  };

  const onNameChange = ({ value, index }) => {
    let newState = [...issues];
    newState[index] = { ...newState[index], title: value };
    onGroupChange(newState);
  };

  return (
    <StyledGroup color={groupColor}>
      <h3>
        <button className="control" onClick={addIssue}>
          +
        </button>
        {groupName}
        &nbsp;&nbsp;
        <i className="fa-solid fa-sort-up arrow" onClick={onUp}></i>&nbsp;
        <i className="fa-solid fa-sort-down arrow" onClick={onDown}></i>
      </h3>

      <SortableList
        orderChangeCallback={({ keyOrder, orderedData }) => onGroupChange(orderedData)}
        onRemoveCallback={issueMoved}
        emptyElement = {<span style={{color: "gray", paddingLeft: "30px"}}>Empty</span>}
        items={
          issues.map((issue, idx) => {
            return { key: issue.id+Math.random(), item: <Issue key={groupName + '_' + issue.id} data={issue} onDelete={toDelete} onExtract={addGroup} index={idx} onNameChange={onNameChange} />, data: issue };
          })
        }
      />
    </StyledGroup>
  );
};

export const Editor = ({editMode = false, changelogId = null}) => {
  const navigate = useNavigate();

  const reduxGroups = useSelector((state) => state.issuesList.groups);

  const [groups, setGroups] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const onPublishEntry = async () => {
    setSpinner(true);

    try {
      await publishEntry(groups, changelogId);

      navigate('/changelog');
    } catch {
      setSpinner(false);
    }
  };

  const onNewGroup = (title) => {
    setGroups((prevState) => {
      let newGroups = [...prevState ];
      newGroups.push({"name":title, "color":"darkgrey", "issues":[]})
      return newGroups;
    }, "onNewGroup");
  };

  const onGroupChange = (issues, index) => {
    setGroups((prevState) => {
      let newGroups = [...prevState ];
      newGroups[index].issues = issues;
      return newGroups;
    }, "onGroupChange");
  };

  const onDown = (index) => {
    setGroups((prevState) => {
      return changeArrayIndex(prevState,index,index+1)
    },"onDown")
  }

  const onUp = (index) => {
    setGroups((prevState) => {
      return changeArrayIndex(prevState,index,index-1)
    },"onUp")
  }

  const EditorPane = () => {
    return (
      <StyledEditor>

        {!spinner && (
          <button onClick={onPublishEntry} className="page-nav-button">
            Publish &nbsp;<i className="fa-solid fa-square-up-right"></i>
          </button>
        )}
        {spinner && <Loader />}

        {/* Maybe have all this ins a sortable list to sort groups */}
        {groups.map((group, index) => (
          <Group key={'group_' + group.name} groupName={group.name} groupColor={group.color} issues={group.issues} onNewGroup={onNewGroup} onGroupChange={(issues) => onGroupChange(issues, index)} onDown={() => onDown(index)} onUp={() => onUp(index)}/>
        ))}

        {/* For publisher: save in db the json object and the redirect*/}

      </StyledEditor>
    );
  };

  useEffect(() => {
    setGroups(reduxGroups, "useEffect");
  }, [reduxGroups]);

  if(editMode)
  {
    return <EditorPane />
  }

  return (
    <SplitScreen
      layout={{
        left: <Organizer />,
        right: <EditorPane />,
        leftWeight: 3,
        rightWeight: 5,
      }}
    ></SplitScreen>
  );
};
