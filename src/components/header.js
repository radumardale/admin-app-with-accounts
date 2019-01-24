import React from 'react';
import Icon from '../components/common/icon';
import styled, { css } from 'styled-components';

const HaderWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const SearchArea = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  padding-left: ${p => p.theme.gap.XXL};
  position: relative;
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

const SearchIcon = styled(Icon)`
  position: absolute;
  left: ${p => p.theme.gap.XXXL};
  color: ${p => p.theme.indigo[100]};
`;

const StyledInput = styled.input`
  transition: background-color 0.5s ease;
  min-width: 12rem;
  padding: ${p => p.theme.gap.S} ${p => p.theme.gap.M};
  padding-left: ${p => p.theme.gap.XXXXL};
  font-side: 14px;
  font-family: 'Futura Md BT Medium';
  color: ${p => p.theme.grey[700]};
  background: ${p => p.theme.grey[50]};
  border: 1px solid ${p => p.theme.grey[100]};
  border-radius: 3px;

  :focus {
    outline: 0;
    background: ${p => p.theme.colours.white};
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.indigo[200]};
  }
`;

class Hader extends React.Component {
  render() {
    return (
      <HaderWrapper>
        <SearchArea>
          <SearchIcon icon="search" />
          <StyledInput placeholder="search" />
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
