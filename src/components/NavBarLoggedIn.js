import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Austin Small Business
            </Typography>
            <ul className="nav-list">
                      <li className="nav-list-item">
                      Listings
                      </li>
                      <li className="nav-list-item">
                         Add
                      </li>
                      <li className="nav-list-item">
                         Logout
                      </li>
                      </ul>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  