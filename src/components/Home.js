import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../components/common/icon';
import Menu from '../components/menu';
import MainArea from '../components/mainArea';
import H from '../components/header';

const headerHeight = 42;
const sidebarWidth = '180px';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${`${sidebarWidth}`} 1fr;
  grid-template-rows: ${`${headerHeight}px`} 1fr;
  grid-template-areas:
    'sidebar  header'
    'sidebar content'
    'sidebar  content';
  background: ${p => p.theme.colours.white};
  color: #444;
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
`;
const Content = styled.div`
  grid-area: content;
  background: ${p => p.theme.colours.white};
`;

const Logo = styled.div`
  height: ${`${headerHeight}px`};
  color: ${p => p.theme.indigo[700]};
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

const Button = styled.button`
  height: 100%;
  cursor: pointer;
  border: 1px solid transparent;
  border-right: 1px solid ${p => p.theme.grey[100]};
  background: ${p => p.theme.colours.white};
  padding: 0 ${p => p.theme.gap.M};
  color: ${p => p.theme.indigo[600]};
  font-size: 18px;

  outline: 0;
  :hover {
    background: ${p => p.theme.grey[700]};
    color: ${p => p.theme.grey[100]};
  }
  :active {
    background: ${p => p.theme.grey[600]};
    color: ${p => p.theme.grey[800]};
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
