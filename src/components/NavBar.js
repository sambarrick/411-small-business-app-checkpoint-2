import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { checkAuth } from "../Router";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Austin Small Business</Link>
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/listings">Listings</Link>
            </li>
            <li className="nav-list-item">
              {!checkAuth() && <Link to="/login">Login</Link>}
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
