import React from 'react';
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Grommet, Sidebar, Nav, Avatar, Grid, Box } from 'grommet';
import { Help, Home, Document, Menu, Close, Linkedin, Github, Mail, Info } from 'grommet-icons';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import About from './About';
import NotFound from './NotFound';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  label: {
    flexDirection: "column",
  }
}));

const routes = [
  {
    path: "/about",
    component: About
  },
  {
    path: "/home",
    component: Home,
  }
];

function Navbar() {

  const [showNav, setShowNav] = useState(false);
  const classes = useStyles();
  if (showNav) {
    return (
      <div className={classes.root}>

        <AppBar position="fixed" style={{ backgroundColor: "transparent", boxShadow: 'none' }}>
          <Toolbar>

            <Sidebar background="brand" round="small" alignSelf="center" alignContent="center" justify="center" align="center" style={{ marginTop: 15 }}

              header={
                <div>
                  <Nav gap="small">
                    <Button icon={<Close />} hoverIndicator color="#A2423D" style={{ backgroundColor: "#A2423D", marginBottom: 5, borderRadius: 50, alignSelf: "center" }} onClick={() => setShowNav(false)} />

                  </Nav>
                  <Avatar src={require('../assets/images/webLogoDark.png')} size="medium" />
                </div>
              }

            /*
            footer={
              <Button icon={<Help />} hoverIndicator />
            }
            */
            >
              <Nav gap="small">
                <Link to="/">
                  <Button icon={<Home />} hoverIndicator primary style={{ marginBottom: 5 }} />
                </Link>
                <Link to="/resume">
                  <Button icon={<Document />} hoverIndicator primary color="accent-4" style={{ marginBottom: 10 }} />
                </Link>
                <Link to="/about">
                  <Button icon={<Info />} hoverIndicator primary color="accent-4" style={{ marginBottom: 10, fontSize: "3px !important" }} />

                </Link>

                <Button icon={<Linkedin />} hoverIndicator primary color='neutral-2' style={{ marginBottom: 10 }} onClick={() => window.open('https://www.linkedin.com/in/jatinarora08/')} />

                <Button icon={<Github />} hoverIndicator primary color="dark-1" style={{ marginBottom: 10 }} onClick={() => window.open('https://www.github.com/jatinAroraGit/')} />
                <Link to="/about">
                  <Button icon={<Mail />} hoverIndicator primary onClick={() => window.open('mailto:"jatin.arora08@outlook.com"?subject="None"')} />
                </Link>
                <Link to="/notFound" >404</Link>



              </Nav>
            </Sidebar>



          </Toolbar>
        </AppBar>
      </div>
    );
  }
  //when showNav is False
  else {
    return (
      <div className={classes.root}>

        <AppBar position="fixed" style={{ backgroundColor: "transparent", boxShadow: 'none' }}>
          <Toolbar>

            <Sidebar background="brand" round="small" alignSelf="start" style={{ marginTop: 15 }}

            >
              <Nav gap="small">
                <Button icon={<Menu />} hoverIndicator onClick={() => setShowNav(true)} />

              </Nav>
            </Sidebar>



          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;