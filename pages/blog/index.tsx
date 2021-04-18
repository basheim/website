import Layout from '../../components/base/layout';
import { getSortedPostsData, getPostData, getPostDataByTag } from '../../lib/posts';
import React from 'react';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from '../../components/blog/main-featured-post';
import FeaturedPost from '../../components/blog/featured-post';
import Sidebar from '../../components/blog/sidebar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sidebar = {
  archives: [
    { title: 'Blog List', url: '/blog/blog-list' }
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/basheim' }
  ],
};

export default function BlogIndex({ newestPostData, tagPostData }: any) {
  const classes = useStyles();
  return (
    <Layout identity={{ title: 'Blog' }} back={{href: '/', title: 'Home'}}>
       <MainFeaturedPost post={newestPostData} />
       <Grid container spacing={5} className={classes.mainGrid}>
          <Grid container spacing={4}>
            {Object.keys(tagPostData).map((tag: any) => (
              <FeaturedPost key={tag} post={tagPostData[tag][0]} tag={tag} />
            ))}
          </Grid>
            <Sidebar
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      tagPostData: getPostDataByTag(allPostsData),
      newestPostData: await getPostData(allPostsData[0].id)
    }
  }
}
