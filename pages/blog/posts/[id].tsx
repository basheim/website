import Layout from '../../../components/base/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/util/date';
import { Grid, Divider, Typography } from '@material-ui/core';

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }: any) {
    return (
      <Layout identity={{title: postData.title}} back={{href: '/blog', title: 'Blog Home'}}>
        <Grid container direction='column'>
          <Typography variant='h4'>{postData.title}</Typography>
          <Date dateString={postData.date} />
          <Divider/>
          <Grid item dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Grid>
      </Layout>
    )
  }