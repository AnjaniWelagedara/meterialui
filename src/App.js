import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({

    root: {
    '& > *': {
      margin: theme.spacing(2),
        width:'70ch',

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





  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className={classes.root}>

          <Card className={classes.card}>

              <form className={classes.root} noValidate autoComplete="off">
                  <h1>User Login</h1>
                  <TextField id="standard-basic" label="Username" />
                  <TextField id="standard-basic" label="Password" />

                  <Button variant="contained" color="primary">
                      Primary
                  </Button>

              </form>



              <CardContent>











              </CardContent>

          </Card>




      </div>
  );
}


