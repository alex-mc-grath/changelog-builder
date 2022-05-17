import styled from 'styled-components';

const Separator = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${({ numberOfColumns }) => {
    if (numberOfColumns === 2) {
      return `

            /* flex-direction: column; */
            display: flex;
            flex-direction: row;
            & > div {
                width: 45%;
                height: min-content;
            }

            @media (max-width: 768px) {
                display: flex;
                flex-direction: column;

                & > div {
                    width: 100%;
                }
            }
            `;
    } else {
      return ``;
    }
  }}
`;

const Columns = ({ baseKey, layout }) => {
  return (
    <Separator numberOfColumns={layout.length}>
      {layout.map((element, index) => (
        <div key={baseKey + '_' + index}>{element}</div>
      ))}
    </Separator>
  );
};

export default Columns;
