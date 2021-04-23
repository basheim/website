import React from "react";
import Image from 'next/image';
import Layout from '../components/base/layout';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getMarkdown } from "../lib/markdown";

const useStyles = makeStyles({
    borderCircle: {
        borderRadius: '80%'
    }
});

export async function getStaticProps() {
    const aboutData = await getMarkdown('about');
    return {
        props: {
            aboutData
        }
    };
}

export default function AboutPage({ aboutData }: any) {
    const classes = useStyles();
    return (
        <Layout identity={{ title: 'About' }} back={{href: '/', title: 'Home'}}>
            <Grid container spacing={1} direction="row" justify="center" alignItems="center" wrap="nowrap">
                <Grid container item>
                    <article>
                        <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
                    </article>
                </Grid>
                <Grid container item justify="center" alignItems="center">
                    <Image
                        priority
                        src="../website/images/dog.jpeg"
                        className={classes.borderCircle}
                        height={410}
                        width={320}
                    />
                </Grid>
            </Grid>
        </Layout>
    )
}
