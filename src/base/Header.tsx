import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';
import NavMenu from './NavMenu';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  }
}));

export default function Header(props: any) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          <NavMenu sections={sections}/>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};