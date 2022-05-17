import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  min-height: 100vh;
  margin: auto;
  background: ${props=>props.theme.colors.quinary};

  @media (min-width: 768px) {
    max-width: none;
    width: 100%;
    display: flex;
  }
`;

const Theme = ({ layout }) => {
  return <Wrapper>{layout}</Wrapper>;
};

export default Theme;
