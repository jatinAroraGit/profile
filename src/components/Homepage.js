import React from 'react';
import '../App.css';
import background from "../assets/images/easyBG.svg";
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Grommet, Sidebar, Nav, Box } from 'grommet';
import { Help, Home, Document } from 'grommet-icons';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 140,
    backgroundColor: "#696969"
  },
  control: {
    padding: theme.spacing(2),
  },

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

function Homepage() {
  const [showModal, setShowModal] = useState(false);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>


      <header className="App-header" style={{ shadows: ["none"], padding: 2, backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

        <Avatar alt="Jatin Arora" src={require('../assets/images/webLogoDark.png')} className={classes.large} />
        <Card className={classes.cardRoot} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Developer
        </Typography>
            <Typography variant="h5" component="h2">
              Jatin{bull}Arora
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Writing Code Since 2012
        </Typography>
            <Typography variant="body2" component="p" style={{ wordWrap: "wrap" }}>
              A devleoper, learner and passionate person when it comes to programming.

            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="#F06292">What I Do ?</Button>
          </CardActions>
        </Card>
        <Card className={classes.cardRoot} style={{ margin: 10 }} variant="outlined">
          <CardContent>
            <Grid item xs={12}>
              <Grid container justify="center" spacing="2">
                <Grid style={{ margin: 2 }}>
                  <Paper className={classes.paper}  >
                    <Button style={{ margin: 2 }} primary label="Front End" onClick={() => setShowModal(true)} />
                  </Paper>

                </Grid>
                <Grid style={{ margin: 2 }}>
                  <Paper className={classes.paper}  >
                    <Button style={{ margin: 2 }} primary label="Back End" onClick={() => setShowModal(true)} />
                  </Paper>

                </Grid>
                <Grid style={{ margin: 2 }}>
                  <Paper className={classes.paper}  >
                    <Button style={{ margin: 2 }} primary label="Database" onClick={() => setShowModal(true)} />
                  </Paper>

                </Grid>
                <Grid style={{ margin: 2 }}>
                  <Button primary>Click Test</Button>
                  <Paper className={classes.paper}  >

                    <Button style={{ margin: 2 }} primary label="Native Mobile" onClick={() => setShowModal(true)} />
                  </Paper>

                </Grid>
                {/*[0, 1, 2, 4].map((value) => (
                  <Grid key={value} item>
                    <Paper className={classes.paper}  >
                      <Button style={{ margin: 5 }} primary label="Front End" onClick={() => setShowModal(true)} />
                    </Paper>

                  </Grid>
                ))*/}
              </Grid>
            </Grid>
            <Dialog onClose={() => setShowModal(false)} aria-labelledby="simple-dialog-title" open={showModal}>
              <DialogTitle id="simple-dialog-title">Information</DialogTitle>
              <h2>dasdkaspkdfp kfvcas </h2>
              <h2>dasdkaspkdfp kfvcas </h2>
              <h2>dasdkaspkdfp kfvcas </h2>
              <h2>dasdkaspkdfp kfvcas </h2>
              <h2>dasdkaspkdfp kfvcas </h2>
              <h2>dasdkaspkdfp kfvcas </h2>
              <h2>dasdkaspkdfp kfvcas </h2>
              <Avatar alt="Jatin Arora" src={require('../assets/images/webLogoDark.png')} className={classes.large} />
            </Dialog>
          </CardContent>

        </Card>

        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2> <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2> <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>
        <h2>dasdkaspkdfp kfvcas </h2>

      </header>


      <Button primary>Click Inside</Button>




      <Button primary>Click</Button>
    </div>
  );
}

export default Homepage;