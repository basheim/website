import Head from 'next/head';
import Image from 'next/image';
import { AppBar, Toolbar } from '@material-ui/core';
import NavMenu from './navMenu';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import utilStyles from '../../styles/utils.module.css';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  container: {
    maxWidth: '80%',
    padding: '0 12x',
    margin: '36px auto 72px'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backToHome: {
    margin: '36px 0 0'
  }
}));

const name = 'Bean'
export const siteTitle = 'Bean Blog'

export default function Layout({ children, home }: any) {
  const classes = useStyles();
  const sections = [
    {
      title: 'Blog',
      href: 'https://www.google.com'
    },
    {
      title: 'Sandbox',
      href: '/posts/so-it-begins'
    }
  ];
  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="../website/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          <NavMenu sections={sections}/>
        </Toolbar>
      </AppBar>
      <header className={classes.header}>
        {home ? (
          <>
            <Image
              priority
              src="../website/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src="../../website/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={classes.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}