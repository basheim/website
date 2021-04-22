import Layout from '../../../components/base/layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Divider } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
}));

export default function AnimationsIndex({  }: any) {
    const classes = useStyles();
    return (
        <Layout identity={{ title: 'Animations' }} back={{href: '/sandbox', title: 'Sandbox Home'}}>
             <Box display="flex" flexDirection="row">
             <Link href='/sandbox/animations/simple-button'>
                <Button variant="contained" color="primary" >Simple Buttons</Button>
            </Link>
            <Divider/>
            <Link href='/sandbox/animations/glob'>
                <Button variant="contained" color="primary">Glob</Button>
            </Link>
            <Divider/>
            <Link href='/sandbox/animations/pong'>
                <Button variant="contained" color="primary">Pong</Button>
            </Link>
            <Divider/>
            <Link href='/sandbox/animations/orbit'>
                <Button variant="contained" color="primary">Orbit</Button>
            </Link>
            </Box>
        </Layout>
    )
}

