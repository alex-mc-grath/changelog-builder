import styled from 'styled-components';

const StyledBody = styled.div`
  color: #fefefe;
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content:center;

  flex: flex-grow;
  margin-top: 2rem;

  > * {
    flex: 1;
  }
`;

const Body = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};

export default Body;
