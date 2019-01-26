import React from 'react';
import styled from 'styled-components';
import Input from '../components/common/input';
import Button from '../components/common/button';
import { Link } from 'react-router-dom';
import LoginPanel from '../components/common/loginPanel';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${p => p.theme.indigo[50]};
`;

const FullRowInput = styled(Input)`
  grid-column: span 2;
  grid-row: 1fr;
`;

const FullRow = styled.div`
  text-align: justify;
  grid-column: span 2;
  grid-row: 1fr;
  padding-top: ${p => p.theme.gap.XXXXL};
  padding-bottom: ${p => p.theme.gap.XL};
  padding-left: ${p => p.theme.gap.L};
  padding-right: ${p => p.theme.gap.L};
  color: ${p => p.theme.grey[600]};
`;

const HalfRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-top: ${p => p.theme.gap.XXXXL};
  padding-bottom: ${p => p.theme.gap.XXXXL};

  button {
    margin-left: auto;
  }
`;

const LoginLink = styled(Link)`
  margin-right: ${p => p.theme.gap.L};
`;

class ResetPasswordPage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <LoginPanel>
          <h3>Reset password</h3>
          <FullRow>
            Please fill your email and you will receive a link with reset your
            password
          </FullRow>
          <FullRowInput topLabel="Email" />
          <HalfRow>
            <LoginLink tabIndex="-1" to="/login">
              I already have an account
            </LoginLink>
          </HalfRow>
          <HalfRow>
            <Button kind="primary">Send reset link</Button>
          </HalfRow>
        </LoginPanel>
      </PageWrapper>
    );
  }
}

export default ResetPasswordPage;
