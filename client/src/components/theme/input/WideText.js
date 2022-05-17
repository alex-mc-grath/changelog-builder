import styled from 'styled-components';

const WideInput = styled.input`
  border-radius: 25px;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  background: #2c2c2d;
  color: white;
  border: 2px solid transparent;

  &:focus,
  &:active {
    outline: none;
    border: 2px solid #1f3b89;
  }

  ${(props) => {
    if (props.value.trim() !== '') {
      return `
            background: #1f3b89;
            /*width: 50%;*/
            // height: 3rem;
            /*transform: translateY(32vh);*/
            transition: 1s all cubic-bezier(0.8, 0, 0.2, 1);
            `;
    } else {
      return `transition: 1s all cubic-bezier(0.8, 0, 0.2, 1);`;
    }
  }}
`;

export default WideInput;
