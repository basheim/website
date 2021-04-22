import Layout from '../../components/base/layout';
import { getSortedPostsData } from '../../lib/posts';
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Date from '../../components/util/date';
import React, { useEffect, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
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
  return (
    <Layout identity={{title: 'Blog List'}} back={{href: '/blog', title: 'Blog Home'}}>
      <section>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search by title…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e: any) => setSearchText(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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