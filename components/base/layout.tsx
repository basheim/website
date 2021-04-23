import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import NavMenu from './navMenu';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';

const useStyles = makeStyles((theme) => ({
  toolbarPrimary: {
    background: 'rgba(0,0,0,0)'
  },
  toolbarSecondary: {
    justifyContent: 'flex-start',
    background: 'rgba(0,0,0,0)'
  },
  overallContainer: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%)',
    display: 'flex',
    flexFlow: 'column',
    overflow: 'hidden'
  },
  mainContainer: {
    maxWidth: '90%',
    border: 100,
    padding: 30,
    overflowX: 'visible'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    textAlign: 'left',
    color: theme.palette.text.primary
  },
  scrollBar: {
    width: 50,
  }
}));

export const siteTitle = 'Bean Blog'

export default function Layout({ children, home, identity, back, noContainer }: any) {
  const classes = useStyles();
  const sections = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: '🚧 Sandbox',
      href: '/sandbox'
    }
  ];
  return (
    <div className={classes.overallContainer}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="../website/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <AppBar elevation={0} position={noContainer ? "fixed" : "sticky"} className={classes.toolbarPrimary}>
        <Toolbar variant="regular" className={classes.toolbarSecondary}>
          <NavMenu sections={sections} home={home} back={back} identity={identity}/>
          <Typography variant="h6" className={classes.title}>
            {identity.title}
          </Typography>
        </Toolbar>
      </AppBar>
      {!noContainer && (
        <Scrollbar className={classes.scrollBar}>
          <Container className={classes.mainContainer}>
            <main>{children}</main>
          </Container>
        </Scrollbar>
      )}
      {noContainer && (
        <main>{children}</main>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
  home: PropTypes.bool,
  identity: PropTypes.object,
  back: PropTypes.object,
  noContainer: PropTypes.bool
};