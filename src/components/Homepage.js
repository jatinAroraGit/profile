import React from 'react';
import '../App.css';
import background from "../assets/images/Hydrogen.jpg";
import tilesSvg from "../assets/images/svgTiles.svg";
import svgBg from "../assets/images/bgSVG.svg";
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
import { Help, Home, Document, Code, Java, Troubleshoot } from 'grommet-icons';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Resume from './Resume';

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 140,
    //backgroundColor: "#EF9A9A",
    //backgroundImage: `url(${svgBg})`,
    backgroundImage: `url(${tilesSvg})`,

    justifyContent: "center"
    , textAlign: "center",
    color: "#FFFFFF"
    , padding: 4
  },
  paperRound: {
    height: 'auto',
    width: 'auto',
    backgroundColor: "#424242",
    //backgroundImage: `url(${svgBg})`,

    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center"
    , textAlign: "center",
    color: "#FFFFFF"
    , padding: 8
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
  smPlus: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  medium: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  medPlus: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  avatar: {
    width: theme.spacing(22),
    height: theme.spacing(22),
    margin: 20
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
    margin: 28
  },
  cardRoot: {
    minWidth: 275,
    outlineColor: "#FF0000",
    outlineWidth: 24,
    margin: 2
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

        <Avatar alt="Jatin Arora" src={require('../assets/images/letterJ.png')} className={classes.avatar} />
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
          </CardActions>
        </Card>


        <Box
          direction="row-responsive"
          pad="none"
          style={{ margin: 10 }}
          animation="fadeIn"
        >

          <Box pad="large"
            animation="fadeIn"

            background="#F06292" style={{ alignItems: "center", justifyContent: "center" }}>

            <Code color="#FFFFFF" size="xlarge" />
          </Box>
          <Box pad="large" background="#42A5F5" style={{ maxWidth: 600 }} >
            <Java color="#FFFFFF" size="medium" />
            <p style={{ fontSize: 16 }}>The first code to output "hello world" was written by me at the age of 15 in Java using the well known System.out.println(). Since then I have dived into different seas of evergrowing programming languages. I have worked on both personal and work projects to become a full stack developer. For now I have my own project at hand which aims to provide a cross-platform app to people using react native. You can know more about me in detail by scrolling below. If you want an overview of my qualifications head over to the <Link to="/resume">resume</Link> page.</p>
          </Box>
        </Box>

        <Card className={classes.cardRoot} style={{
          margin: 10, backgroundImage: `url(${svgBg})`
        }} variant="outlined">
          <CardContent>
            <Grid item xs={12}>
              <Grid container justify="center" spacing="2">
                <Grid style={{ margin: 2, alignItems: "center" }}>
                  <Paper className={classes.paper}  >
                    <Box align="center">
                      <Avatar style={{ alignSelf: "center" }} alt="analysis" src={require('../assets/images/diagramSvg.svg')} className={classes.medium} />
                      <h3>Analysis</h3>
                    </Box>
                  </Paper>

                </Grid>
                <Grid style={{ margin: 2 }}>
                  <Paper className={classes.paper} onClick={() => setShowModal(true)}  > <Box align="center">
                    <Avatar style={{ alignSelf: "center" }} alt="analysis" src={require('../assets/images/website-svgrepo-com.svg')} className={classes.medium} />
                    <h3>Front End</h3>
                    <Button style={{ margin: 2 }} primary label="Open" onClick={() => setShowModal(true)} />

                  </Box>
                  </Paper>

                </Grid>
                <Grid style={{ margin: 2 }}>
                  <Paper className={classes.paper}  >
                    <Box align="center">
                      <Avatar style={{ alignSelf: "center" }} alt="analysis" src={require('../assets/images/code-svgrepo-com.svg')} className={classes.medium} />
                      <h3>Back End</h3>
                    </Box>
                  </Paper>

                </Grid>
                <Grid style={{ margin: 2 }}>

                  <Paper className={classes.paper}  >
                    <Box align="center">
                      <Avatar style={{ alignSelf: "center" }} alt="analysis" src={require('../assets/images/database-svgrepo-com.svg')} className={classes.medium} />
                      <h3>Database</h3>
                    </Box>
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
              <h2>Test Modal </h2>
              <Avatar alt="Jatin Arora" src={require('../assets/images/webLogoDark.png')} className={classes.large} />
            </Dialog>
          </CardContent>

        </Card>

        {/*Projects Section*/}

        <Paper className={classes.paperRound}  >
          <Box align="center"
            direction="row"
            pad="none"
            style={{ justifyContent: "center", alignContent: "center" }}
            animation="fadeIn">
            <p style={{ fontSize: 20, fontWeight: 'bolder' }}> Projects </p>
            <Troubleshoot color="#FFFFFF" size="medium" style={{ padding: 4 }} />
          </Box>
        </Paper>

        <Box
          direction="row-responsive"
          pad="none"
          style={{ margin: 10 }}
          animation="fadeIn"
        >

          <Box pad="large"
            animation="fadeIn"

            background="#000000" style={{ alignItems: "center", justifyContent: "center" }}>
            <Avatar alt="Recipe Box Logo" src={require('../assets/images/recipeBox.png')} className={classes.medium} />
          </Box>
          <Box pad="large" background="#FFFFFF" style={{ maxWidth: 600 }} >
            <h4 style={{ margin: 0 }}>Recipe Box</h4>
            <p style={{ fontSize: 16, margin: 0 }}>Cross platform app built using react-native,expo and javascript on the front end. Back-end built with Node JS and Express. App provides user's access to recipes around the world.</p>
          </Box>
        </Box>

        <Box
          direction="row-responsive"
          pad="none"
          style={{ margin: 10 }}
          animation="fadeIn"
        >

          <Box pad="large"
            animation="fadeIn"

            background="#000000" style={{ alignItems: "center", justifyContent: "center" }}>
            <Avatar alt="Leven App Logo" src={require('../assets/images/levenBGLogo.png')} className={classes.medium} />
          </Box>
          <Box pad="large" background="#FFFFFF" style={{ maxWidth: 600 }} >
            <h4 style={{ margin: 0 }}>Leven</h4>
            <p style={{ fontSize: 16, margin: 0 }}>A Cross platform app built using react-native,expo and javascript on the front end and a Python back end. Leven is a health monitoring and fitness tracking app.</p>
          </Box>
        </Box>

      </header>

    </div>
  );
}

export default Homepage;