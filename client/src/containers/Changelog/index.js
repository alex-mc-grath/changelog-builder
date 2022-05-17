import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useStateLoader from '../../components/useStateLoader';
import { getEntries } from './actions';
import { useNavigate } from 'react-router-dom';
import {EditableTextField} from './EditableTextField'


const StyledChangelog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 0;
  color: white;
  background: #000d1a;

  .page-container {
    background: #000d1a;
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: 60%;
    height: fit-content;
    margin: auto;
    padding: 0 4rem;
    padding-top: 4rem;
    color: white;
    box-sizing: border-box;

    h1 {
      font-size: 2.4rem;
      margin-bottom: 0.2rem;
    }

    .description {
      font-style: italic;
    }

    .entryDate {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .label {
      font-size: 1.3rem;
      margin-left: 1rem;
    }

    .issue {
      margin: 1rem auto;
      margin-left: 2rem;
    }

    .editButton {
      font-size: 1rem;
      cursor: pointer;
      color: #292C6D;

      &:hover {
        color: white;
      }
    }
  }
`;

const Icon = styled.i`
  color: ${({ color }) => color || 'white'};
  margin: 0;
  margin-right: 0.4rem;
`;

const Label = styled.h4`
    font-size:.8rem;
    margin-left:1rem;
    color:white;
    width:fit-content;
    text-transform:uppercase;
    padding:0.1rem .3rem;
    font-weight:500;
    border-radius:5px;
    background: ${({ color }) => color};
`;

export const Changelog = () => {

  const navigate = useNavigate();

  const [changelogEntries, loadEntries, LoadingEntries] = useStateLoader({ action: getEntries });
  const userLogin = useSelector((state) => state.userLogin);

  const editChangelog = (id) => {
    navigate('/changelog/edit/'+id);
  }

  useEffect(() => {
    if (userLogin.userInfo?.token && userLogin.pageLoaded) {
      loadEntries();
    }
  }, [userLogin]);

  return (
    <LoadingEntries>
      <i className="fa-solid fa-rotate-left"></i>
      {changelogEntries !== null && (
        <StyledChangelog>
          <div className="page-container">
            <h1>Changelog</h1>
            <p className="description"><EditableTextField /></p>
            {changelogEntries.map((changelogEntry) => (
              <div key={changelogEntry._id}>
                <p className="entryDate">{changelogEntry.date}&nbsp;&nbsp;<i onClick={() => editChangelog(changelogEntry._id)} className="fa-solid fa-pen editButton"></i></p>
                {changelogEntry.entry.map((group) => (
                  <div key={changelogEntry.id + group.name}>
                    <Label color={group.color}>{group.name}</Label>
                    <ul className="">
                      {group.issues.map((issue) => (
                        <li className="issue" key={issue.id}>
                          <Icon color={group.color} className="fa-solid fa-caret-right"></Icon> {issue.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </StyledChangelog>
      )}
    </LoadingEntries>
  );
};
