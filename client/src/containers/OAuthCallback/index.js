import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from './actions';
import { useDispatch } from 'react-redux';

const OAuthCallback = () => {
  const location = useLocation();
  const codeParam = new URLSearchParams(location.search).get('code');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate(codeParam, () => navigate('/editor')));
  }, [dispatch]);

  return (
    <div>
      {/*codeParam*/}
      {/* <button onClick={()=>navigate("/editor")}></button> */}
    </div>
  );
};

export default OAuthCallback;
