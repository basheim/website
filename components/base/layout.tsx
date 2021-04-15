import Head from 'next/head';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavMenu from './navMenu';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarSecondary: {
    justifyContent: 'flex-start',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  overallContainer: {
    width: 'auto',
    margin: 'auto auto 72px'
  },
  mainContainer: {
    width: '90%',
    position: 'fixed',
    right: 0,
    left: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderTop: 100,
    paddingTop: 30
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
      title: 'Sandbox',
      href: '/posts/so-it-begins'
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
      <div className={classes.mainContainer}>
        <main>{children}</main>
        {!home && (
          <div className={classes.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}