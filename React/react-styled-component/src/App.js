import React, { Component } from 'react';
import styled, { injectGlobal, keyframes, css, ThemeProvider } from 'styled-components';
import theme from './theme';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
  }
`;

const Card = styled.div`
  background-color: blue;
`

const Form = () => (
  <Card>
    <Button>This is Form Button</Button>
  </Card>
);

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #bdc3c7;
  /* nesting */
  ${Card} {
    background-color: white;
  }
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
  background-color: ${(props) => (props.danger ? 'red' : props.theme.mainColor)};
  ${(props) => {
    if (props.danger) {
      return `animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
  }};
`;

const Anchor = Button.withComponent('a').extend`
  text-decoration: none;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

const Input = styled.input.attrs({ required: true })`
  margin-top: 50px;
  border-radius: 5px;
  ${awesomeCard}
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Button success>Hi</Button>
          <Button danger rotationTime={5}>
            Danger
          </Button>
          <Anchor href="http://www.google.com">Go to Goo</Anchor>
          <Input placeholder="Hello" />
          <Form/>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
