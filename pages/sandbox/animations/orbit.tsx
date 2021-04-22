import Layout from '../../../components/base/layout';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated, useSpringRef, useChain } from 'react-spring';
import { useDrag } from 'react-use-gesture'
import { TrendingUpTwoTone } from '@material-ui/icons';
import useInertia from '../../../components/animation/inertia';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: 'white',
        height: '60vh',
        width: '60vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-30vh',
        marginLeft: '-30vw'
    },
    ball: {
        position: 'absolute',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        backgroundColor: 'black'
    }
}));


const bounds = {
    y: [-250, 250],
    x: [-100, 100]
  }
const slow = { mass: 20, tension: 80, friction: 0 }

export default function PongGame({ }: any) {
    const classes = useStyles();
    let spring1: any;
    let set: any;
    [spring1, set]= useInertia({x: 0, y: 0});
            
    const orbit = () => {
        set({
            x: 100,
            y: 0,
            config: {
                inertia: true,
                bounds,
                velocity: 10
            }
        })
    };

    return (

        <Layout identity={{ title: 'Orbit' }} back={{ href: '/sandbox/animations', title: 'Animation Home' }} noContainer>
            <div className={classes.mainContainer} onClick={() => orbit()}>
                <animated.div className={classes.ball} style={spring1}/>
            </div>
        </Layout>
    )
}

