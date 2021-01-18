import React from 'react';
import '../App.css';
import background from "../assets/images/Delicate.jpg";

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, Grommet, Sidebar, Nav, Grid, Box } from 'grommet';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { Help, Home, Document } from 'grommet-icons';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

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
  cardRoot: {
    minWidth: 275,
    outlineColor: "#FF0000",
    outlineWidth: 24
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bolder',
    color: '#D32F2F'
  },
  pos: {
    marginBottom: 12,
  },
}));

function NotFound() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grommet plain>

      <header className="App-header" style={{ shadows: ["none"], padding: 2, backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

        <Card className={classes.cardRoot} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Oops!
        </Typography>
            <Typography variant="h5" component="h4">
              Page Not Found
        </Typography>
          </CardContent>

        </Card>
        <Link to="/">
          <Button color="#D32F2F" primary style={{ padding: 6, margin: 4 }} onClick size="small">Go To Homepage</Button>
        </Link>
      </header>

    </Grommet>
  );
}

export default NotFound;