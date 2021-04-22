import Layout from '../../../components/base/layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTrail, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
    globInnerContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'white'
    },
    hooksMain: {
        "& svg": {
            display: 'none'
        },
        "& div": {
            position: 'absolute',
            willChange: 'transform',
            borderRadius: '50%',
            background: 'blue',
            boxShadow: '10px 10px 5px 0px black',
            opacity: 0.6
        },
        "& div:nth-child(1)": {
            width: '120px',
            height: '120px'
        },
        "& div:nth-child(2)": {
            width: '250px',
            height: '250px'
        },
        "& div:nth-child(3)": {
            width: '150px',
            height: '150px'
        },
        "& div:nth-child(4)": {
            width: '190px',
            height: '190px'
        },
        "& div::after": {
            context: '',
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'white'
        },
        "& div:nth-child(2)::after": {
            top: '70px',
            left: '70px',
            width: '70px',
            height: '70px',
        },
        "& div:nth-child(3)::after": {
            top: '50px',
            left: '50px',
            width: '50px',
            height: '50px',
        },
        width: '100%',
        height: '100%',
        filter: 'url(#goo)',
        position: 'absolute',
        overflow: 'hidden'
    }
}));

const fast = { tension: 1500, friction: 40 }
const slow = { mass: 20, tension: 200, friction: 50 }

export default function GlobAnimation({ }: any) {
    const classes = useStyles();
    const [trail, set]: any = useTrail(4, () => ({ x: 0, y:0, config: (i: number) => (i % 2 === 0 ? fast : slow) }));
    return (

        <Layout identity={{ title: 'Glob Animation' }} back={{ href: '/sandbox/animations', title: 'Animation Home' }} noContainer>
                <div className={classes.globInnerContainer}>
                    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                            <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                        </filter>
                    </svg>
                    <div className={classes.hooksMain} onMouseMove={(e: any) => set({ x: e.clientX, y:e.clientY })}>
                        {trail.map((props: any, index: any) => (
                            <animated.div key={index} style={props} />
                        ))}
                    </div>
                </div>
        </Layout>
    )
}

