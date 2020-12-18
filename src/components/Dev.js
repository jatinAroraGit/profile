import React from 'react';
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, Grommet, Sidebar, Nav, Grid, Box } from 'grommet';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { Close } from 'grommet-icons';
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "50%" },
}


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


export const Dev = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Grommet plain>

      <header className="App-header" style={{ shadows: ["none"] }}>

        <Card className={classes.cardRoot} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              DEV
        </Typography>
            <Typography variant="h5" component="h4">
              <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
              >
                <Button icon={<Close />} onClick={() => setIsOpen(!isOpen)} />
                <p>Hey</p>
              </motion.nav>
              Page Not Found
        </Typography>
            <motion.nav
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <Button icon={<Close />} onClick={() => setIsOpen(!isOpen)} />
              <p>Hey</p>
            </motion.nav>
          </CardContent>

        </Card>

      </header>

    </Grommet>
    /*
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Button onClick={() => setIsOpen(!isOpen)} />
      <p>Hey</p>
    </motion.nav>
    */

  )
}