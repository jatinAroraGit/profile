import React from 'react';
import '../App.css';
import background from "../assets/images/blues.jpg";

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

function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grommet plain>

      <header className="App-header" style={{ shadows: ["none"], padding: 2, backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

        <Box direction="row-responsive"
          pad="none"
          style={{ margin: 10 }}
          animation="fadeIn">
          <Card className={classes.cardRoot} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                About This Website
        </Typography>

              <Typography variant="h5" component="h2">
                <h3 style={{ margin: 2 }}> Developed by Jatin Arora </h3>
                <h5 style={{ margin: 2 }}>   Built with React </h5>
              </Typography>
              <h5 style={{ margin: 2 }}>
                UI Frameworks Used
      </h5>
              <Typography variant="body2" component="p">
                <a href="https://v2.grommet.io/">Grommet</a>
              </Typography>
              <Typography variant="body2" component="p">
                <a href="https://react-bootstrap.github.io/">React Bootstrap</a>
              </Typography>
              <Typography variant="body2" component="p">
                <a href="https://material-ui.com/">Material UI</a>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </header>


    </Grommet>
  );
}

export default About;