import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  AIPaper:{
      width: 250,
      height: 150,
      color: "blue",
      textAlign: "center",
      
  },
  CNPaper:{
    width: 250,
    height: 150,
    color: "#f10c61",
    textAlign: "center",

},
BCPaper:{
    width: 250,
    height: 150,
    color: "#ffbe07",
    textAlign: "center",
    
},
ITPaper:{
    width: 250,
    height: 150,
    color: "#6b6ec3de",
    textAlign: "center",
    
},
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.AIPaper}>Artificial Intelligence </Paper>
      <Paper elevation={3} className={classes.CNPaper}>Cloud Native and Mobile Web </Paper>
      <Paper elevation={3} className={classes.BCPaper}>Blockchain </Paper>
      <Paper elevation={3} className={classes.ITPaper}>Internet of Things and AI </Paper>

    </div>
  );
}
