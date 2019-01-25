// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { adjustHue } from 'polished';

const embeddedButton = css`
  background: none;
  color: ${p => p.theme.grey[200]};
  border: 1px solid ${p => p.theme.grey[100]};
  box-shadow: none;
`;

const compactButton = css`
  font-size: 14px;
  padding: ${p => p.theme.gap.XXS} ${p => p.theme.gap.S};
`;

const roundButton = css`
  border-radius: 50%;

  svg {
    vertical-align: middle;
  }
`;

const ButtonStyled = styled.button`
  font-family: ${p => p.theme.typo.font};
  font-size: 16px;
  padding: ${p => p.theme.gap.S} ${p => p.theme.gap.L};
  border-radius: 4px;
  color: ${p => p.theme.grey[50]};
  background-image: linear-gradient(
    ${p => p.theme.indigo[600]},
    ${p => adjustHue(14, p.theme.indigo[600])}
  );
  border: 1px solid ${p => p.theme.indigo[600]};
  box-shadow: 2px 2px 5px 0px rgba(119, 119, 119, 0.25);

  :focus {
    box-shadow: 4px 4px 5px 0px rgba(119, 119, 119, 0.25);
  }
  :hover:not(:disabled) {
    cursor: pointer;
    color: ${p => p.theme.colours.white};
    background-image: linear-gradient(
      ${p => p.theme.indigo[800]},
      ${p => adjustHue(14, p.theme.indigo[800])}
    );
    box-shadow: 4px 4px 5px 0px rgba(119, 119, 119, 0.25);
  }

  :active:not(:disabled) {
    color: ${p => p.theme.grey[100]};
    background: ${p => p.theme.indigo[900]};
    border: 1px solid ${p => p.theme.grey[700]};
    box-shadow: none;
  }

  :disabled {
    color: ${p => p.theme.grey[400]};
    background: ${p => p.theme.grey[200]};
    border: 1px solid ${p => p.theme.grey[300]};
    box-shadow: none;
  }

  svg {
    margin-left: ${p => (p.iconPosition === 'after' ? p.theme.gap.S : 0)};
    margin-right: ${p => (p.iconPosition === 'before' ? p.theme.gap.S : 0)};
  }

  ${p => p.kind === 'embedded' && embeddedButton};
  ${p => p.isCompact && compactButton};
  ${p => p.isRound && roundButton};
`;

const GroupButtons = styled.div`

  ${ButtonStyled}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  ${ButtonStyled} ~ ${ButtonStyled} {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

type Props = {
  onClick: () => void,
  type?: 'button' | 'reset' | 'submit',
  kind?: 'primary' | 'embedded',

  isCompact?: boolean,
  isRound?: boolean,

  onFocus?: () => void,
  onmouseover?: () => void,
  onmouseout?: () => void,
  className?: string,
  children: Array<HTMLElement> | string | any,
  iconPosition?: 'before' | 'after'
};

class Button extends React.Component<Props> {
  static defaultProps = {
    isCompact: false,
    isRound: false
  };

  static ButtonGroup = (props: { className?: string, children: any }) => (
    <GroupButtons className={props.className}>{props.children}</GroupButtons>
  );

  render() {
    const { iconPosition, ...props } = this.props;
    return (
      <ButtonStyled {...props} iconPosition={iconPosition}>
        {props.children}
      </ButtonStyled>
    );
  }
}

export default Button;
