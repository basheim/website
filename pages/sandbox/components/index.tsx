import Layout from '../../../components/base/layout';
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CardContainer from '../../../components/util/card-container';


export default function ComponentsIndex({ }: any) {
    return (
        <Layout identity={{ title: 'Components' }} back={{ href: '/sandbox', title: 'Sandbox Home' }}>
            <Grid container spacing={5}>
                <CardContainer link={'/sandbox/components/advanced-tooltip'}>
                    <Typography variant='h4'>Advanced Tooltip</Typography>
                </CardContainer>
            </Grid>
        </Layout>
    )
}

