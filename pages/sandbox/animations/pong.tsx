import Layout from '../../../components/base/layout';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import { Divider } from '@material-ui/core';

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
    leftPaddle: {
        position: 'relative',
        height: '20%',
        width: '105%',
        backgroundColor: 'black',
        overflow: 'hidden',
        opacity: 1,
        float: 'left'
    },
    leftPaddleContainer: {
        position: 'relative',
        height: '100%',
        width: '200%',
        background: 'rgba(0,0,0,0)',
        float: 'left'
    },
    leftGoalContainer: {
        position: 'relative',
        height: 'inherit',
        width: '1.5%',
        backgroundColor: '#00FFFF',
        float: 'left'
    },
    rightPaddle: {
        position: 'relative',
        height: '20%',
        width: '105%',
        backgroundColor: 'black',
        overflow: 'hidden',
        opacity: 1,
        float: 'right'
    },
    rightPaddleContainer: {
        position: 'relative',
        height: '100%',
        width: '200%',
        background: 'rgba(0,0,0,0)',
        float: 'right'
    },
    rightGoalContainer: {
        position: 'relative',
        height: 'inherit',
        width: '1.5%',
        backgroundColor: '#00FFFF',
        float: 'right'
    },
    ball: {
        position: 'absolute',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'black'
    }
}));

function getWindowDimensions() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    return {
        width: 0, height: 0
    };
}

const fast = { tension: 1000, friction: 600 }
const slow = { mass: 20, tension: 200, friction: 50 }
const trans = (y: string) => `translate3d(0,${y}px,0) translate3d(0,-50%,0)`

export default function PongGame({ }: any) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const classes = useStyles();
    const [spring, set]: any = useSpring(() => ({ y: 0, config: fast }));
    return (

        <Layout identity={{ title: 'Pong' }} back={{ href: '/sandbox/animations', title: 'Animation Home' }} noContainer>
            <div className={classes.mainContainer}>
                <div className={classes.leftGoalContainer}>
                    <div className={classes.leftPaddleContainer} onMouseMove={(e: any) => set({ y: e.clientY - (windowDimensions.height * 0.2) })}>
                        <animated.div style={{ transform: spring.y.interpolate(trans) }} className={classes.leftPaddle} />
                    </div>
                </div>
                <div className={classes.ball}/>
                <div className={classes.rightGoalContainer}>
                    <div className={classes.rightPaddleContainer} onMouseMove={(e: any) => set({ y: e.clientY - (windowDimensions.height * 0.2) })}>
                        <animated.div style={{ transform: spring.y.interpolate(trans) }} className={classes.rightPaddle} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

