import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${p => p.theme.indigo[50]};
`;

class SignUpPage extends React.Component {
  render() {
    return (
      <PageWrapper>
        Page does not exist.
        <Link to="/">Home</Link>
      </PageWrapper>
    );
  }
}

export default SignUpPage;
