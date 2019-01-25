import styled from 'styled-components';

export default styled.div`
  width: 30rem;
  border: 1px solid ${p => p.theme.grey[100]};
  background: ${p => p.theme.colours.white};
  margin: 4rem auto;
  padding: 0 ${p => p.theme.gap.XXXL};
  // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
  //   0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: grid;
  grid-template-columns: 50% 50%;

  h3 {
    text-align: center;
    grid-column: span 2;
    grid-row: 1fr;
    color: ${p => p.theme.indigo[500]};
    margin-bottom: ${p => p.theme.gap.XXL};
  }
`;
