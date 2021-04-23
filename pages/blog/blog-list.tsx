import Layout from '../../components/base/layout';
import { getSortedPostsData } from '../../lib/posts';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Date from '../../components/util/date';
import React, { useState } from 'react';
import { InputBase, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { animated, useSpring } from 'react-spring';
import { useHover } from 'react-use-gesture';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    backgroundColor: theme.palette.common.white
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function BlogList({ allPostsData }: any) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const getSearchedPostData = (allPostsData: any, searchText: string) => {
    if (!searchText || searchText === '') {
      return allPostsData;
    }
    return allPostsData.filter(({ title }: any) => title.toLowerCase().includes(searchText.toLowerCase()));
  }
  const AnimatedGrid = animated(Grid);
  const [spring, api] = useSpring(() => ({ opacity: 0.25, config: { mass: 5, tension: 350, friction: 40}}))

  const bind = useHover(({ active }) => active ? api.start({ opacity: 0.45 }) : api.start({opacity: 0.25}), {});
  return (
    <Layout identity={{ title: 'Blog List' }} back={{ href: '/blog', title: 'Blog Home' }}>
      <section>
        <AnimatedGrid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
          className={classes.search}
          style={spring}
          {...bind()}>
          <Grid
            item
            className={classes.searchIcon}>
            <SearchIcon />
          </Grid>
          <Grid item>
            <InputBase
              placeholder="Search by title…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e: any) => setSearchText(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Grid>
        </AnimatedGrid>
        <ul>
          {getSearchedPostData(allPostsData, searchText).map(({ id, date, title }: any) => (
            <li key={id}>
              <Link href={`/blog/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}