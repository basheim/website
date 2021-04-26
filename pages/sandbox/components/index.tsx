import Layout from '../../../components/base/layout';
import React from 'react';
import { Grid } from '@material-ui/core';
import Image from 'next/image';
import CardContainer from '../../../components/util/card-container';


export default function ComponentsIndex({ }: any) {
    return (
        <Layout identity={{ title: 'Components' }} back={{ href: '/sandbox', title: 'Sandbox Home' }}>
            <Grid container spacing={5}>
                <CardContainer link={'/sandbox/components/advanced-tooltip-example'}>
                    <Image
                    priority
                    src="../../../website/images/advanced-tooltip.gif"
                    width={200}
                    height={200}
                    />
                </CardContainer>
                <CardContainer link={'/sandbox/components/advanced-move-example'}>
                    <Image
                    priority
                    src="../../../website/images/dog.jpeg"
                    width={200}
                    height={200}
                    />
                </CardContainer>
            </Grid>
        </Layout>
    )
}

