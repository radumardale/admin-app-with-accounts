import React from 'react';
import styled from 'styled-components';

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${p => p.theme.grey[500]};
  padding: ${p => p.theme.gap.S} ${p => p.theme.gap.M} 0;
  font-size: 14px;
`;

const InputStyled = styled.input`
  font-family: ${p => p.theme.typo.font}};
  font-size: 16px;
  padding: ${p => p.theme.gap.S} ${p => p.theme.gap.M};
  color: ${p => p.theme.grey[800]};
  border: 1px solid ${p => p.theme.grey[200]};
  border-radius: 2px;
  :focus {
    outline: 1px solid ${p => p.theme.indigo[400]};
  }
`;

type Props = {
  className?: string,
  topLabel?: string,
  value?: string
};

class Button extends React.Component<Props> {
  render() {
    const { className, ...props } = this.props;
    return (
      <Field className={className}>
        <Label>{this.props.topLabel}</Label>
        <InputStyled {...props} />
      </Field>
    );
  }
}

export default Button;
