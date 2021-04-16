import Head from 'next/head';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import NavMenu from './navMenu';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'flex-start'
  },
  overallContainer: {
    width: 'auto',
    margin: 'auto auto 72px'
  },
  mainContainer: {
    maxWidth: '90%',
    borderTop: 100,
    paddingTop: 30,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backToHome: {
    margin: '36px 0 0'
  },
  title: {
    textAlign: 'left'
  }
}));

export const siteTitle = 'Bean Blog'

export default function Layout({ children, home, identity }: any) {
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
      href: '/under-construction'
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
      <AppBar position="sticky">
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          <NavMenu sections={sections} />
          <Typography variant="h6" className={classes.title}>
            {identity.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.mainContainer}>
        <main>{children}</main>
        {!home && (
          <div className={classes.backToHome}>
            <Link href='/'>
              <Button variant="contained" color="primary" href="#contained-buttons">← Back to home</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  )
}