import React from 'react';
import { IconButton, SwipeableDrawer, List, ListItem, ListItemText, Grid, Divider, Tooltip } from '@material-ui/core';
import { Menu, ArrowBack } from '@material-ui/icons';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navMenuList: {
    width: 'auto',
    height: '100%'
  },
  drawer: {
    width: 'auto'
  }
});


export default function NavMenu(props: any) {
  const classes = useStyles();
  const { sections, home, back } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const list = (navSections: any[]) => (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='flex-start'
      className={classes.navMenuList}
      role="presentation"
      onClick={() => setIsOpen(false)}
    >
      {!home && (
        <div>

          <Link href={back.href}>
            <Tooltip title={`Back to ${back.title}`} placement='right-end'>
              <IconButton edge="end" color="inherit">
                <ArrowBack />
              </IconButton>
            </Tooltip>
          </Link>
          <Divider />
        </div>
      )}
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
  );

  return (
    <React.Fragment>

      <IconButton edge="start" color="inherit" onClick={() => setIsOpen(isOpen => !isOpen)}>
        <Menu />
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

