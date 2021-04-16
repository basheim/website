import Layout from '../../components/base/layout';
import { getSortedPostsData, getPostData } from '../../lib/posts';
import React from 'react';
import Link from 'next/link';
import { Grid, Typography, Button } from '@material-ui/core';

function getSummaryHtmlString(htmlString: string): string {
  const minIndex = 150;
  let index;
  let firstFlag = false;
  if (minIndex > htmlString.length) {
    return htmlString;
  }
  for (index = 0; index < htmlString.length; index++) {
    if (index > minIndex) {
      if (!firstFlag && htmlString.charAt(index - 1) === '<' && htmlString.charAt(index) === '/') {
        firstFlag = true;
      }
      if (firstFlag && htmlString.charAt(index) === '>') {
        return htmlString.substring(0, index);
      }
    }
  }
  return htmlString;
}

export default function BlogIndex({ newestPostData }: any) {
  let featuredPost = <></>;
  if (newestPostData) {
    featuredPost =
      <div>
        <Typography variant="h6">{`Featured Post: ${newestPostData.title}`}</Typography>
        <div dangerouslySetInnerHTML={{ __html: `${getSummaryHtmlString(newestPostData.contentHtml)}<br/><br/>...` }} />
        <Link href={`/blog/posts/${newestPostData.id}`}>
          <Button variant="contained" color="primary" href="#contained-buttons">Go To Post ➡</Button>
        </Link>
      </div>;
  }
  return (
    <Layout identity={{ title: 'Blog' }}>
      <Grid container spacing={1} direction="row" justify="center" alignItems="center" wrap="nowrap">
        <Grid container item>
          {featuredPost}
        </Grid>
        <Grid container item>
          <div>
            <Typography variant="h6">{`All Posts`}</Typography>
            <Link href={`/blog/blog-list`}>
              <Button variant="contained" color="primary" href="#contained-buttons">Go To All Post ➡</Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const newestPostData = await getPostData(allPostsData[0].id);
  return {
    props: {
      newestPostData
    }
  }
}