import React from 'react';
import Icon from '../components/common/icon';
import styled, { css } from 'styled-components';

const MenuList = styled.ul`
  padding-top: ${p => p.theme.gap.M};
`;
const MenuItem = styled.li`
  color: ${p => p.theme.indigo[700]};

  padding: ${p => p.theme.gap.M} ${p => p.theme.gap.XXXXL} ${p => p.theme.gap.M}
    ${p => p.theme.gap.XXXL};

  span {
    display: inline-block;
    margin-right: ${p => p.theme.gap.L};
  }
  svg {
    display: inline-block;
    vertical-align: middle;
  }

  align-items: center;
  justify-items: self-start;
  display: grid;
  grid-template-columns: 36px 1fr;
  cursor: pointer;

  svg {
    opacity: 0.6;
  }

  :hover {
    background: ${p => p.theme.indigo[600]};
    color: ${p => p.theme.colours.white};
    svg {
      opacity: 1;
      color: ${p => p.theme.grey[50]};
    }
  }
`;

const menuItems = [
  {
    icon: 'tachometer-alt',
    name: 'Dashboard'
  },
  {
    icon: 'file',
    name: 'Pages'
  },
  {
    icon: 'sliders-h',
    name: 'Modules'
  },
  {
    icon: 'store',
    name: 'Plugins'
  },
  {
    icon: 'tags',
    name: 'Tags'
  },
  {
    icon: 'window-maximize',
    name: 'Application'
  }
];

class Menu extends React.Component {
  render() {
    return (
      <MenuList>
        {menuItems.map(item => {
          return (
            <MenuItem key={`item-${item.name}`}>
              <Icon icon={item.icon} />
              <span>{item.name}</span>
            </MenuItem>
          );
        })}
      </MenuList>
    );
  }
}

export default Menu;
