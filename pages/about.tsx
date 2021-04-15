import Head from "next/head";
import React from "react";
import Image from 'next/image';
import Layout from '../components/base/layout';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    borderCircle: {
      borderRadius: '80%'
    }
  }));

export default function AboutPage({}: any) {
    const classes = useStyles();
    return (
      <Layout identity={{title: 'About'}}>
        <Head>
          <title>About me</title>
        </Head>
        <Grid container spacing={1} direction="row" justify="center" alignItems="center" wrap="nowrap" >
            <Grid container item justify="center" alignItems="center">
            <Image
              priority
              src="../website/images/dog.jpeg"
              className={classes.borderCircle}
              height={144}
              width={144}
            />
            </Grid>
            <Grid container item>
                <p>hey</p>
            </Grid>
        </Grid>
      </Layout>
    )
  }
  