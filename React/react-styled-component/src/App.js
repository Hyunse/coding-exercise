import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? 'red' : '#2ecc71')};
`;

const Anchor = Button.withComponent('a').extend`
  text-decoration: none;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button success>Hi</Button>
        <Button danger>Danger</Button>
        <Anchor href="http://www.google.com">Go to Goo</Anchor>
      </Container>
    );
  }
}

export default App;
