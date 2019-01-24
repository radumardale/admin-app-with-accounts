import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../components/common/icon';
import Menu from '../components/menu';
import MainArea from '../components/mainArea';
import H from '../components/header';
import Select from 'react-select';

const headerHeight = 45;
const sidebarWidth = 'auto';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${`${sidebarWidth}`} 1fr;
  grid-template-rows: ${`${headerHeight}px`} 1fr;
  grid-template-areas:
    'sidebar  header'
    'sidebar content'
    'sidebar  content';
  background: ${p => p.theme.colours.white};
  color: ${p => p.theme.grey[800]};
  height: 100vh;
`;

const Header = styled.div`
  grid-area: header;
  background: ${p => p.theme.colours.white};
  border-bottom: 1px solid ${p => p.theme.grey[100]};
  z-index: 1;

  display: flex;
  align-items: center;
`;
const Sidebar = styled.div`
  grid-area: sidebar;
  background: ${p => p.theme.colours.white};
  border-right: 1px solid ${p => p.theme.grey[100]};
  z-index: 1;
  box-shadow: 0 16px 71px 3px ${p => p.theme.grey[100]};
`;
const Content = styled.div`
  grid-area: content;
  background: ${p => p.theme.colours.white};
`;

const Logo = styled.div`
  height: ${`${headerHeight}px`};
  color: ${p => p.theme.indigo[400]};
  background: ${p => p.theme.colours.white};

  border-bottom: 1px solid ${p => p.theme.grey[100]};
  font-family: ${p => p.theme.typo.headerFont};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: ${p => p.theme.gap.S};
  }
`;

const options = [
  { value: 'default', label: 'Default account' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const StyledSelect = styled(Select)`
  .s__control {
    min-width: 160px;
    border: 1px solid transparent;
    border-bottom: 1px solid ${p => p.theme.grey[100]};
    border-radius: 0;
  }
  .s__control:hover {
    border: 1px solid transparent;
    border-bottom: 1px solid ${p => p.theme.grey[100]};
    border-radius: 0;
  }
  .s__value-container {
    padding-left: ${p => p.theme.gap.XXL};
  }
  .s__single-value {
    color: ${p => p.theme.indigo[400]};
  }
  .s__indicator-separator {
    background-color: ${p => p.theme.colours.white};
  }
  .s__dropdown-indicator {
    padding-top: ${p => p.theme.gap.L};
    padding-bottom: ${p => p.theme.gap.L};
    color: ${p => p.theme.indigo[200]};
  }
  .s__control--is-disabled {
    background: ${p => p.theme.colours.white};
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <H />
        </Header>
        <Sidebar>
          <Logo>
            <Icon icon="cloud" />
          </Logo>
          <StyledSelect
            disabled
            isDisabled
            isSearchable={false}
            classNamePrefix="s"
            options={options}
            value={options[0]}
          />

          <Menu />
        </Sidebar>
        <Content>
          <MainArea />
        </Content>
      </Wrapper>
    );
  }
}

export default Home;
