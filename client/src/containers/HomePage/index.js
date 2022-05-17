import React, { useEffect } from 'react'
import Body from '../../components/theme/base/Body';

import useStateLoader from '../../components/useStateLoader';

import Container from '../../components/theme/layout/Container';

import { CreateNewChangelog } from '../../components/CreateNewChangelog';

import { useDispatch, useSelector } from 'react-redux'

import { listIssues } from './actions'

import styled from 'styled-components';


export default function HomePage() {


  return (
    <>
      <CreateNewChangelog />
    </>
  );
}
