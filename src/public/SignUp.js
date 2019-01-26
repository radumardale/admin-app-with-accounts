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

const SignUpLink = styled(Link)`
  margin-right: ${p => p.theme.gap.L};
`;

class SignUpPage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <LoginPanel>
          <h3>Sign up for new ccount</h3>
          <FullRowInput topLabel="Email" />
          <FullRowInput topLabel="Password" type="password" />
          <HalfRow>
            <SignUpLink tabIndex="-1" to="/login">
              I already have an account
            </SignUpLink>
          </HalfRow>
          <HalfRow>
            <Button kind="primary">Create account</Button>
          </HalfRow>
        </LoginPanel>
      </PageWrapper>
    );
  }
}

export default SignUpPage;
