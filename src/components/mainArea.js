import React from 'react';
import Icon from '../components/common/icon';
import styled, { css } from 'styled-components';

const MainAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled.div`
  flex: 1 0 auto;

  background: ${p => p.theme.indigo[50]};
  font-size: 14px;
  padding: 0 ${p => p.theme.gap.XXXL} ${p => p.theme.gap.XXL};

  border-bottom: 1px solid ${p => p.theme.grey[100]};
`;

class MainArea extends React.Component {
  render() {
    return (
      <MainAreaWrapper>
        <Header>
          <h2>Welcome</h2>
          <p>Lorem </p>
        </Header>
      </MainAreaWrapper>
    );
  }
}

export default MainArea;
