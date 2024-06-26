import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: theme.spacing(2),
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Users Posts</Typography>
        <div>
          <Button color="inherit" component={Link} to="/" className={classes.link}>
        User
          </Button>
          <Button color="inherit" component={Link} to="/posts" className={classes.link}>
            Post
          </Button>
          <Button color="inherit" component={Link} to="/user-posts" className={classes.link}>
            UsersPosts
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
