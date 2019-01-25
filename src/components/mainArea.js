import React from 'react';
import Icon from '../components/common/icon';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

const MainAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled.div`
  flex: 1 0 auto;

  background: ${p => transparentize(0.6, p.theme.indigo[50])};
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
