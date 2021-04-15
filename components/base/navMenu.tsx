import React from 'react';
import { IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    list: {
      width: 'auto'
    }
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
      <List className={classes.list}>
        {navSections.map((section: any) => (
        <Link href={section.href} key={section.title} passHref>
          <ListItem button  component="a">
            <ListItemText primary={section.title} />
          </ListItem>
        </Link>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
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

