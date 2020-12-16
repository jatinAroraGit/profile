import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, Grommet, Sidebar, Nav, Grid, Box } from 'grommet';
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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function Resume() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grommet plain>

      <header className="App-header" style={{ shadows: ["none"] }}>

        <Card className={classes.cardRoot} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Resume
        </Typography>
            <Typography variant="h5" component="h2">
              Jatin Arora
        </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Computer Programmer
        </Typography>
            <Typography variant="body2" component="p">
              <a href="https://www.linkedin.com/in/jatinarora08/">Linkedin</a>
            </Typography>
            <Typography variant="body2" component="p">
              <a>Email: jatin.arora08@outlook.com</a>
            </Typography>
            <Typography variant="body2" component="p">
              <a href="https://github.com/jatinaroraGit">Github</a>
            </Typography>
          </CardContent>
        </Card>
      </header>

    </Grommet>
  );
}

export default Resume;