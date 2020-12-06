import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Toggle = styled.div`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;

  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
`;

const TagLine = styled.h3`
  color: ${(props) => props.theme.tagLineColor};
`;

const Splash = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const icon = theme === 'light' ? <HiMoon size={35} /> : <CgSun size={35} />;

  return (
    <Container>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
      <Title>Light Mode OR Dark Mode</Title>
      <TagLine>Click Icon</TagLine>
    </Container>
  );
};

export default Splash;
