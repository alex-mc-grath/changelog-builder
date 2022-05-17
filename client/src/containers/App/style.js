import styled from 'styled-components/macro';

export default styled.div`
max-width: 380px;
min-height: 100vh;
display: flex;
flex-direction: column;
margin: auto;

@media (min-width: 768px) {
  max-width: none;
  width: 100%;
  display: flex;
}

> * {
  flex-direction: column;
}
`;