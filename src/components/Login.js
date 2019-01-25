import React from 'react';
import styled from 'styled-components';
import Input from '../components/common/input';
import Button from '../components/common/button';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${p => p.theme.indigo[50]};
`;

const LoginPanel = styled.div`
  max-width: 32rem;
  min-width: 29rem;
  border: 1px solid ${p => p.theme.grey[100]};
  background: ${p => p.theme.colours.white};
  margin: 4rem auto;
  padding: 0 ${p => p.theme.gap.XXXL};

  display: grid;
  grid-template-columns: 50% 50%;

  h3 {
    text-align: center;
    grid-column: span 2;
    grid-row: 1fr;
    color: ${p => p.theme.indigo[500]};
    margin-bottom: ${p => p.theme.gap.XXL};
  }
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
`;

const LoginLink = styled(Link)`
  margin-left: ${p => (p.autoleft ? 'auto' : p.theme.gap.S)};
  margin-right: ${p => p.theme.gap.L};
`;

class LoginPage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <LoginPanel>
          <h3>Sign in</h3>
          <FullRowInput topLabel="Email" />
          <FullRowInput topLabel="Password" type="password" />
          <HalfRow>
            <span>No account?</span>
            <LoginLink tabIndex="-1" to="/signup">
              Sign up
            </LoginLink>
          </HalfRow>
          <HalfRow>
            <LoginLink tabIndex="-1" autoleft="true" to="/recover-password">
              Recover password
            </LoginLink>
            <Button kind="primary">Login</Button>
          </HalfRow>
        </LoginPanel>
      </PageWrapper>
    );
  }
}

export default LoginPage;
