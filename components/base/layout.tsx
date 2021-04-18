import Head from 'next/head';
import { AppBar, Toolbar, Typography, Button, Container, Divider } from '@material-ui/core';
import NavMenu from './navMenu';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'flex-start'
  },
  overallContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#cdcdcd',
    display: 'flex',
    flexFlow: 'column'
  },
  paddingDiv: {
    flex: '1'
  },
  mainContainer: {
    minHeight:"70vh",
    maxWidth: '90%',
    border:100,
    padding: 30,
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundColor: 'white'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    textAlign: 'left'
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
      <AppBar position={noContainer ? "fixed" : "sticky"}>
        <Toolbar variant="regular" className={classes.toolbarSecondary}>
          <NavMenu sections={sections} />
          <Typography variant="h6" className={classes.title}>
            {identity.title}
          </Typography>
          <div className={classes.paddingDiv}/>
          {!home && (
          <Link href={back.href}>
              <Button variant="contained" color="primary" href="#contained-buttons">{`⬅ Back to ${back.title}`}</Button>
          </Link>
          )}
        </Toolbar>
      </AppBar>
      <Divider />
{!noContainer && (
  <Container className={classes.mainContainer}>
  <main>{children}</main>
</Container>
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