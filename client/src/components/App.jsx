import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import Products from './Products';
import Product from './product/Product';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#339ed3',
      main: '#0086c8',
      dark: '#005d8c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bd344c',
      main: '#ad0220',
      dark: '#790116',
      contrastText: '#18162c',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <header>
      <img
        src="https://edtmlv.pbworks.com/f/1450761659/media-6466-w700-q100%5B1%5D.jpg"
        alt="S-mart logo"
      />
      <FormControl className="search-control">
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <Input
          id="search-input"
          type="text"
          value=""
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </header>
    <nav>
      <ul>
        <li>
          <a href="/products">Pants</a>
        </li>
        <li>
          <a href="/products">Jackets</a>
        </li>
        <li>
          <a href="/products">Accessories</a>
        </li>
        <li>
          <a href="/products">Kicks</a>
        </li>
      </ul>
    </nav>
    <div>
      <Switch>
        <Route path="/product/:id" component={Product} />
        <Route path="/products" component={Products} />
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
    <footer>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Careers</li>
      </ul>
    </footer>
  </ThemeProvider>
);

export default App;
