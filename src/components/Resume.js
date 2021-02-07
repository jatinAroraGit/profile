import React from 'react';
import { useState, useEffect } from 'react'
import '../App.css';
import background from "../assets/images/blues.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Grommet, Box } from 'grommet';
import { Help, Home } from 'grommet-icons';
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
    , padding: 4,

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

      <header className="App-header" style={{ shadows: ["none"], padding: 2, backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", paddingBottom: 16, paddingTop: 16 }}>


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
            <Typography style={{ marginTop: 10, alignContent: "center", justifyContent: "center", alignSelf: "center" }} color="textSecondary">

              <Button color={'#2193b0'} primary label=" Download Resume (PDF)" href="https://www.dropbox.com/s/r1aejq3tzcfn3tp/Resume.pdf?dl=0" />
            </Typography>
          </CardContent>

        </Card>

        <Box direction="row-responsive"
          pad="none"
          style={{ margin: 1 }}
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
                Front End
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
                Back End
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
                Database
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
              <Typography variant="body2" component="p">
                AGILE
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

          <Box pad="small"
            animation="fadeIn"

            background="#FFFFFF" style={{ width: 400 }}>
            <h5 style={{ margin: 2 }}>Work Experience</h5>
            <h6 style={{ margin: 2, color: '#2193b0' }}> Software Programmer</h6>
            <h6 style={{ margin: 2, fontSize: 16 }}>Logistics Software Corp</h6>
            <p style={{ margin: 2, fontSize: 16 }}>Richmond Hill, Ontario</p>
            <p style={{ margin: 2, fontSize: 16 }}>May 2018 - February 2019</p>
            <p style={{ margin: 2, fontSize: 16 }}>February 2020 - May 2020</p>

          </Box>
          <Box pad="small" background="#000000" style={{ width: 400 }} >
            <h5 style={{ margin: 2 }}>Education</h5>
            <h6 style={{ margin: 2, color: '#2193b0' }}>Advance Diploma in Computer Programming and Analysis</h6>
            <h6 style={{ margin: 2 }}>
              Seneca College of Applied Arts and Technology
            </h6>
            <p style={{ margin: 2, fontSize: 16 }}>Toronto, Ontario</p>
            <p style={{ margin: 2, fontSize: 16 }}>January 2017 - April 2020</p>
            <p style={{ margin: 2, fontSize: 16 }}>GPA of 3.8 out of 4.0</p>

          </Box>
        </Box>

        <Box

          pad="small"
          style={{ margin: 10, width: 800 }}
          animation="fadeIn"
          background="#FFFFFF"
        >
          <h3 style={{ margin: 4 }}>Projects</h3>
          <h4 style={{ margin: 2, color: "#2193b0" }}>Recipe Box</h4>
          <p style={{ margin: 2, fontSize: 16 }}>An application developed for iOS, Android and Web using React Native on the client side and Node Js and Express for the back end to develop a RESTful API based on MVC architecture.
         </p>
          <p style={{ margin: 2, fontSize: 16 }}> <a href="https://github.com/jatinAroraGit/recipe-box-api" style={{ color: "#2193b0" }}> Source Code for Back End</a> </p>
          <p style={{ margin: 2, fontSize: 16 }}> <a href="https://github.com/jatinAroraGit/recipe-box-app" style={{ color: "#2193b0" }}> Source Code for Front End </a>
          </p>
          <h4 style={{ margin: 2, color: "#2193b0", paddingTop: 10 }}>Telescope</h4>
          <p style={{ margin: 2, fontSize: 16 }}>Telescope was an open-source project by Seneca CDOT. The project was aimed at developing a responsive website which contains all the blog posts (submitted by students or simply by any RSS feed link). The feeds or blog posts were then filtered and processed to be displayed to the user browsing the Telescope website. </p>
          <p style={{ margin: 2, fontSize: 16 }}><a href="https://github.com/Seneca-CDOT/telescope" style={{ color: "#2193b0" }}>Project Page</a></p>
          <h4 style={{ margin: 2, color: "#2193b0", paddingTop: 10 }}>Open Source Contributions</h4>
          <p style={{ margin: 2, fontSize: 16 }}>Contributed to many open source projects and collabrated with the community to fix issues, implement features and test software. Worked on projects built with Python, Java, C, Javascript and Kotlin</p>
          <p style={{ margin: 2, fontSize: 16 }}><a href="https://github.com/jatinAroraGit" style={{ color: "#2193b0" }}>Github Profile</a></p>


        </Box>

      </header>

    </Grommet>
  );
}

export default Resume;