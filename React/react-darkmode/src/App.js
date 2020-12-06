import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Splash from './components/Splash'
import './App.css';

const LightTheme = {
  pageBackground: 'white',
  titleColor: '#dc658b',
  tagLineColor: 'black',
};

const DarkTheme = {
  pageBackground: '#272c36',
  titleColor: 'lightpink',
  tagLineColor: 'lavender',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
