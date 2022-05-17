import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import Header from '../../components/theme/base/Header';

import GlobalStyle from '../../global-styles';

import { Organizer } from '../Organizer';
import { Editor } from '../Editor';
import { Login } from '../../components/Login';
import OAuthCallback from '../../containers/OAuthCallback';
import EditChangeLog from '../../containers/EditChangeLog'

import setAuthToken from '../../utils/setAuthToken';
import store from '../../store';
import { Changelog } from '../Changelog';

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch({ type: 'PAGE_LOADED' });
  }, []);
  return (
    <>
      <Header layout={{ logo: [{ text: 'Change Log Project' }] }} />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/editor" element={<Editor />} />
        <Route exact path="/changelog" element={<Changelog />} />
        <Route exact path="/oauth/callback" element={<OAuthCallback />} />
        <Route exact path="/changelog/edit/:changeLogId" element={<EditChangeLog />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
