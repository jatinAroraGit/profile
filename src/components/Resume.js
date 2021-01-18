import React from 'react';
import { useState, useEffect } from 'react'
import '../App.css';
import background from "../assets/images/blues.jpg";

import { makeStyles } from '@material-ui/core/styles';
import resume from '../assets/docs/Resume.pdf';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, Grommet, Sidebar, Nav, Grid, Box } from 'grommet';
import { Help, Home } from 'grommet-icons';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


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
    outlineWidth: 24,
    margin: 2
  },
  cardContent: {
    width: 170,
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
  paper: {
    height: 140,
    width: 140,
    //backgroundColor: "#EF9A9A",
    //backgroundImage: `url(${svgBg})`,
    backgroundColor: "#FFFFFF",

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
  }
}));

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Grommet plain>

      <header className="App-header" style={{ shadows: ["none"], padding: 2, backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>


        <Card className={classes.cardRoot} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Resume
        </Typography>
            <Box direction="row-responsive"
              pad="none"
              style={{ margin: 10 }}
              animation="fadeIn">
              <Box direction="column"
                pad="none"
                style={{ margin: 10 }}
                animation="fadeIn">

                <Typography variant="h5" component="h2" style={{ color: '#2193b0' }}>
                  Jatin Arora
        </Typography>

                <Typography className={classes.pos} color="textSecondary">
                  Full Stack Developer
        </Typography>
              </Box>
              <Box direction="column"
                pad="none"
                style={{ margin: 6, }}
                animation="fadeIn">
                <Typography variant="body2" component="p">
                  <a href="https://www.linkedin.com/in/jatinarora08/">Linkedin</a>
                </Typography>
                <Typography variant="body2" component="p">
                  <a>Email: jatin.arora08@outlook.com</a>
                </Typography>
                <Typography variant="body2" component="p">
                  <a href="https://github.com/jatinaroraGit">Github</a>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Box direction="row-responsive"
          pad="none"
          style={{ margin: 10 }}
          animation="fadeIn">
          <Card className={classes.cardContent} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Programming Languages
        </Typography>

              <Typography variant="body2" component="p">
                C++
              </Typography>
              <Typography variant="body2" component="p">
                JAVA
              </Typography>
              <Typography variant="body2" component="p">
                Javascript
              </Typography>
              <Typography variant="body2" component="p">
                Typescript
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cardContent} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                FRONT END
        </Typography>

              <Typography variant="body2" component="p">
                Angular 2+
              </Typography>
              <Typography variant="body2" component="p">
                React
              </Typography>
              <Typography variant="body2" component="p">
                React Native
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardContent} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                BACK END
        </Typography>


              <Typography variant="body2" component="p">
                Node JS
              </Typography>
              <Typography variant="body2" component="p">
                Express JS
              </Typography>

            </CardContent>
          </Card>

        </Box>

        <Box direction="row-responsive"
          pad="none"
          style={{ margin: 10 }}
          animation="fadeIn">
          <Card className={classes.cardContent} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                DATABASE
        </Typography>

              <Typography variant="body2" component="p">
                SQL
              </Typography>
              <Typography variant="body2" component="p">
                MySQL
              </Typography>
              <Typography variant="body2" component="p">
                Micrsoft SQL
              </Typography>
              <Typography variant="body2" component="p">
                Mongo DB
              </Typography>

            </CardContent>
          </Card>

          <Card className={classes.cardContent} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Development Tools and Methodoligies
        </Typography>


              <Typography variant="body2" component="p">
                GIT
              </Typography>
              <Typography variant="body2" component="p">
                SDLC
              </Typography>

            </CardContent>
          </Card>
          <Card className={classes.cardContent} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                UI and Styling
        </Typography>

              <Typography variant="body2" component="p">
                HTML
              </Typography>
              <Typography variant="body2" component="p">
                CSS 3
              </Typography>
              <Typography variant="body2" component="p">
                SASS
              </Typography>


            </CardContent>
          </Card>
        </Box>
        <Box
          direction="row-responsive"
          pad="none"
          style={{ margin: 10 }}
          animation="fadeIn"
        >

          <Box pad="large"
            animation="fadeIn"

            background="#FFFFFF" style={{ alignItems: "center", justifyContent: "center", width: 400 }}>
            <h5>Work Experience</h5>
            <h6>Programmer at Logistics Software Corp</h6>
            <p></p>
          </Box>
          <Box pad="large" background="#000000" style={{ width: 400 }} >
            <h5>Education</h5>
            <h6>Advance Diploma in Computer Programming and Analysis</h6>
          </Box>
        </Box>



      </header>
      <div>


      </div>
    </Grommet>
  );
}

export default Resume;