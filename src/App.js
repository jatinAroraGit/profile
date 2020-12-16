import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { Button } from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Button, Grommet, Sidebar, Nav, Grid, Box } from 'grommet';
import 'typeface-roboto';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import About from '../src/components/About';
import NotFound from './components/NotFound';
import Resume from './components/Resume';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
    margin: 28
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/profile" exact>
            <Homepage />
          </Route>
          <Route path="/notFound">
            <NotFound />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

      {/*
      <Navbar></Navbar>
      <Homepage></Homepage>
      */}
    </div>
  );

  /* ORG
   return (
     <div className="App">
       <Navbar></Navbar>
     </div>
   );
   */
}

export default App;
