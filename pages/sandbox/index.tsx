import Layout from '../../components/base/layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CardContainer from '../../components/util/card-container';

const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
        justifyContent: 'flex-start'
    }
}));

export default function SandboxIndex({  }: any) {
    const classes = useStyles();
    return (
        <Layout identity={{ title: 'Sandbox' }} back={{href: '/', title: 'Home'}}>
            <CardContainer link={'/sandbox/animations'}>
                <Typography variant='h4'>Animations</Typography>
            </CardContainer>
        </Layout>
    )
}

