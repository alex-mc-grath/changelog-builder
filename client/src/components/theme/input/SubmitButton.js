import styled from 'styled-components';

const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  width: 100%;
  height: 1.7rem;
  background: #2c2c2d;
  border-radius: 25px;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  text-align: center;
  margin-left: 0.5rem;
  color: #67666a;

  &:hover {
    cursor: pointer;
    background: #1f3b89;
    color: lightgrey;
    transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);
  }
`;

export default SubmitButton;
