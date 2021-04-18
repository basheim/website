import Layout from '../../../components/base/layout';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import { Button, Divider, Box } from '@material-ui/core';
import ToggleButton from '../../../components/util/toggle-button';
import RandomColorButton from '../../../components/util/random-color-button';
import BouncyButton from '../../../components/util/bouncing-button';

const useStyles = makeStyles((theme) => ({
}));

export default function SimpleButtonAnimations({ }: any) {
    const classes = useStyles();
    const fadeFromStart = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });
   
    const AnnimatedButton = animated(Button);
    return (
        <Layout identity={{ title: 'Simple Button Animations' }} back={{ href: '/sandbox/animations', title: 'Animation Home' }}>
            <Box display="flex" flexDirection="row">
                <AnnimatedButton  variant="contained" color="primary" style={fadeFromStart}>Fade in Button</AnnimatedButton>
                <Divider orientation="vertical" flexItem />
                <ToggleButton opacity />
                <Divider orientation="vertical" flexItem />
                <RandomColorButton />
                <Divider orientation="vertical" flexItem />
                <ToggleButton fontSize />
                <Divider orientation="vertical" flexItem />
                <BouncyButton />
            </Box>
        </Layout>
    )
}

