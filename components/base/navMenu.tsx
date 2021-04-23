import React from 'react';
import { Typography, IconButton, SwipeableDrawer, List, ListItem, ListItemText, Grid, Divider, Tooltip } from '@material-ui/core';
import { Menu, ArrowBack, Close } from '@material-ui/icons';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navMenuList: {
    width: 'auto',
    height: '100%'
  },
  drawer: {
    width: 'auto'
  },
  menuIcon: {
    color: theme.palette.common.black
  }
}));

export default function NavMenu(props: any) {
  const classes = useStyles();
  const { sections, home, back, identity } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const list = (navSections: any[]) => (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='flex-start'
      className={classes.navMenuList}
      onClick={() => setIsOpen(false)}
    >
      <Grid item>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          spacing={3}
        >
          {!home && (
            <Grid item>
              <Link href={back.href}>
                <Tooltip title={`Back to ${back.title}`} placement='right-end'>
                  <IconButton edge="end" color="inherit">
                    <ArrowBack />
                  </IconButton>
                </Tooltip>
              </Link>
            </Grid>
          )}
          <Grid item>
            <Tooltip title={`Exit Menu`} placement='right-end'>
              <IconButton edge="end" color="inherit">
                <Close />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <List>
          {navSections.map((section: any) => (
            <Link href={section.href} key={section.title} passHref>
              <ListItem button component="a">
                <ListItemText primary={section.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Grid>
    </Grid>
  );

  return (
    <React.Fragment>

      <IconButton edge="start" color="inherit" onClick={() => setIsOpen(isOpen => !isOpen)}>
        <Menu className={classes.menuIcon} />
      </IconButton>
      <SwipeableDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        className={classes.drawer}
      >
        {list(sections)}
      </SwipeableDrawer>
    </React.Fragment>
  );
}

