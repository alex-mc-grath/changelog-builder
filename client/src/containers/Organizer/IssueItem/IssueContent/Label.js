import styled from 'styled-components/macro';

export const Label = styled.div`
  display: inline-block;
  font-size:.8rem;
  line-height:.8rem;
  padding: 0.2rem 0.8rem;
  margin: 0.1rem;
  color: ${({color}) => color};
  border: 1px solid ${({color}) => color};
  background: transparent;
  border-radius: 15px;
`;