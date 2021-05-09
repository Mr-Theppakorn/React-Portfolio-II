import React, { useState, useEffect } from 'react'
import { Route, Switch as Switching } from 'react-router';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggle = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    }
    else {
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="App">
      <Sidebar menuMobile={menuMobile} />

      <div className="mobile-menuu">
        <IconButton onClick={() => setMenuMobile(!menuMobile)}>
          <MenuIcon />
        </IconButton>
      </div>

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              checked={checked}
              name="checkedA"
              inputProps={{ 'aria-label': '' }}
              size="medium"
              onClick={themeToggle}
            />
          </div>
        </div>
      </div>
      <AppStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/portfolios" exact>
            <Portfolio />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switching>
      </AppStyled>
    </div>

  )
}

const AppStyled = styled.div`
position: relative;
margin-left: 16rem;
min-height:100vh;
@media screen and (max-width: 1200px) {
    margin-left: 0;
}

.lines {
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  opacity: 0.5;
  z-index: -1;

  .line-1, .line-2, .line-3, .line-4 {
    width: 1px;
    min-height: 100vh;
    background-color: var(--border-color);

  }
}

`;

export default App;

