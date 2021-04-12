import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu } from '@material-ui/icons'

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    menuButton: {}
  });

export default function NavMenu(props: any) {
  const classes = useStyles();
  const { sections } = props;
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (openSetting: any) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open: openSetting });
  };

  const list = (navSections: any[]) => (
    <div
      className="navMenuList"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navSections.map((section: any) => (
          <ListItem button key={section.title} component="a" href="https://www.google.com">
            <ListItemText primary={section.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
          <SwipeableDrawer
            open={state['open']}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list(sections)}
          </SwipeableDrawer>
    </React.Fragment>
  );
}

