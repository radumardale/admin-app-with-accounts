import React from 'react';
import Icon from '../components/common/icon';
import styled, { css } from 'styled-components';

const HaderWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const SearchArea = styled.div`
  flex: 1 0 auto;
`;
const ButtonsArea = styled.div`
  flex: 0 1 auto;
`;

const HeaderButton = styled.button`
  border: 1px solid transparent;
  color: ${p => p.theme.indigo[500]};
  font-size: 16px;
  cursor: pointer;

  height: 100%;
  padding: ${p => p.theme.gap.M} ${p => p.theme.gap.M} ${p => p.theme.gap.M};

  :hover {
    background: ${p => p.theme.indigo[600]};
    color: ${p => p.theme.grey[50]};
  }
`;

class Hader extends React.Component {
  render() {
    return (
      <HaderWrapper>
        <SearchArea>
          <input placeholder="search" />
        </SearchArea>
        <ButtonsArea>
          <HeaderButton>
            <Icon icon="envelope" />
          </HeaderButton>
          <HeaderButton>
            <Icon icon="calendar-alt" />
          </HeaderButton>
          <HeaderButton>
            <Icon icon="power-off" />
          </HeaderButton>
        </ButtonsArea>
      </HaderWrapper>
    );
  }
}

export default Hader;
