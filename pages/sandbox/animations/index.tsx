import Layout from '../../../components/base/layout';
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CardContainer from '../../../components/util/card-container';


export default function AnimationsIndex({ }: any) {
    return (
        <Layout identity={{ title: 'Animations' }} back={{ href: '/sandbox', title: 'Sandbox Home' }}>
            <Grid container spacing={5}>
                <CardContainer link='/sandbox/animations/glob'>
                    <Typography variant='h4'>Glob</Typography>
                </CardContainer>
            </Grid>
        </Layout>
    )
}

