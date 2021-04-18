import Layout from '../../components/base/layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, Button } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
        justifyContent: 'flex-start'
    }
}));

export default function SandboxIndex({  }: any) {
    const classes = useStyles();
    return (
        <Layout identity={{ title: 'Sandbox' }} back={{href: '/', title: 'Home'}}>
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                <Link href='/sandbox/animations'>
                    <Button>Animation</Button>
                </Link>
            </Toolbar>
            <Typography>In Progress</Typography>
        </Layout>
    )
}

