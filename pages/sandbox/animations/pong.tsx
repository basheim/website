import Layout from '../../../components/base/layout';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { useDrag } from 'react-use-gesture';
import {
    motion,
    useSpring,
    useMotionValue,
    useMotionTemplate, useAnimation, transform, useVelocity, useTransform, animate, AnimationPlaybackControls
} from 'framer-motion';

interface AnimationData {
    xAnimation: AnimationPlaybackControls;
    yAnimation: AnimationPlaybackControls;
    wallFlags: WallFlags;
    previousX: number;
    previousY: number;
    x: number;
    y: number;
}

interface WallFlags {
    top: boolean;
    bottom: boolean;
    right: boolean;
    left: boolean;
    hitTop: boolean;
    hitBottom: boolean;
    hitRight: boolean;
    hitLeft: boolean;
}

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
        width: '2vw',
        height: '2vw',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
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

    const speed = windowDimensions.width * 0.6 / 2;
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    let animations: AnimationData;
    const maxX = (windowDimensions.width * 0.3) - (windowDimensions.width * 0.02);
    const minX = -(windowDimensions.width * 0.3);
    const maxY = (windowDimensions.height * 0.3) - (windowDimensions.width * 0.02);
    const minY = -(windowDimensions.height * 0.3);
    const ballMinX = minX - 1;
    const ballMaxX = maxX + 1;
    const ballMinY = minY - 1;
    const ballMaxY = maxY + 1;
    useEffect(() => {
        const animatedBall = () => {
            if (!continueAnimations(animations)) {
                animations = setAnimations(animations);
            }
        };

        const continueAnimations = (animations: AnimationData) => {
            if (animations === undefined) {
                return false;
            }
            const xValue = x.get();
            const yValue = y.get();

            if (xValue >= maxX || yValue >= maxY || xValue <= minX || yValue <= minY) {
                animations.wallFlags = {
                    bottom: yValue >= maxY,
                    top:  yValue <= minY,
                    left: xValue <= minX ,
                    right: xValue >= maxX,
                    hitTop: animations.wallFlags.hitTop,
                    hitBottom: animations.wallFlags.hitBottom,
                    hitLeft: animations.wallFlags.hitLeft,
                    hitRight: animations.wallFlags.hitRight,
                }
                return false;
            }
            return true;
        }

        const calculateDuration = (oldX: number, newX: number, oldY: number, newY: number) => {
            return Math.sqrt(Math.pow(Math.abs(newX - oldX), 2) + Math.pow(Math.abs(newY - oldY), 2)) / speed;
        }

        const setAnimations = (animations: AnimationData) => {
            if (animations === undefined) {
                return {
                    xAnimation: animate(x, ballMaxX, {
                        duration: calculateDuration(0, ballMaxX, 0, 20)
                    }),
                    yAnimation: animate(y, 20, {
                        duration: calculateDuration(0, ballMaxX, 0, 20)
                    }),
                    previousX: 0,
                    previousY: 0,
                    x: ballMaxX,
                    y: 20,
                    wallFlags: {
                        bottom: false,
                        top:  false,
                        left: false ,
                        right: false,
                        hitTop: false,
                        hitBottom: false,
                        hitRight: false,
                        hitLeft: false
                    }
                };

            } else {
                if ((animations.wallFlags.right && animations.wallFlags.hitRight) || (animations.wallFlags.left && animations.wallFlags.hitLeft) || (animations.wallFlags.top && animations.wallFlags.hitTop) || (animations.wallFlags.bottom && animations.wallFlags.hitBottom)) {
                    return animations;
                }
                animations.xAnimation.stop();
                animations.yAnimation.stop();
                let newX = animations.x;
                let newY = animations.y;
                const goingRight = animations.previousX - animations.x < 0;
                const goingDown = animations.previousY - animations.y < 0;
                let remainingX;
                let remainingY;
                const wallFlags = animations.wallFlags;
                if (goingDown) {
                    remainingY  = Math.abs(ballMaxY - animations.y);
                } else {
                    remainingY = Math.abs(ballMinY - animations.y);
                }
                if (goingRight) {
                    remainingX = Math.abs(ballMaxX - animations.x); 
                } else {
                    remainingX = Math.abs(ballMinX - animations.x);
                }
                const xRatio = Math.abs(newX/newY);
                const yRatio = Math.abs(newY/newX);
                if (animations.wallFlags.right) {
                    const ySteps = Math.abs(yRatio * remainingY);
                    const xSteps = Math.abs(xRatio * (ballMaxX - ballMinX));
                    if (xSteps < ySteps) {
                        if (goingDown) {
                            newY = ballMaxY;
                        } else {
                            newY = ballMinY;
                        }
                        newX = animations.x - (xRatio * remainingY);
                    } else {
                        if (goingDown) {
                            newY = animations.y + (yRatio * (ballMaxX - ballMinX));
                        } else {
                            newY = animations.y - (yRatio * (ballMaxX - ballMinX));
                        }
                        newX = ballMinX; 
                    }
                    wallFlags.hitRight = true;
                    wallFlags.hitLeft = false;
                    wallFlags.hitTop = false;
                    wallFlags.hitBottom = false;
                } 
                if (animations.wallFlags.left) {
                    const ySteps = Math.abs(yRatio * remainingY);
                    const xSteps = Math.abs(xRatio * (ballMaxX - ballMinX));
                    console.log(remainingY);
                    if (xSteps < ySteps) {
                        if (goingDown) {
                            newY = ballMaxY;
                        } else {
                            newY = ballMinY;
                        }
                        newX = animations.x + (xRatio * remainingY);
                    } else {
                        if (goingDown) {
                            newY = animations.y + (yRatio * (ballMaxX - ballMinX));
                        } else {
                            newY = animations.y - (yRatio * (ballMaxX - ballMinX));
                        }
                        newX = ballMaxX; 
                    }
                    wallFlags.hitRight = false;
                    wallFlags.hitLeft = true;
                    wallFlags.hitTop = false;
                    wallFlags.hitBottom = false;
                }
                if (animations.wallFlags.bottom) {
                    const ySteps = Math.abs(yRatio * (ballMaxY - ballMinY));
                    const xSteps = Math.abs(xRatio * remainingX);
                    if (xSteps < ySteps) {
                        console.log('going to x wall')
                        if (goingRight) {
                            newX = ballMaxX;
                        } else {
                            newX = ballMinX;
                        }
                        newY = animations.y - (yRatio * remainingX);
                    } else {
                        console.log('going to y wall')
                        if (goingRight) {
                            newX = animations.x + (xRatio * (ballMaxY - ballMinY));
                        } else {
                            newX = animations.x - (xRatio * (ballMaxY - ballMinY));
                        }
                        newY = ballMinY; 
                    }
                    wallFlags.hitRight = false;
                    wallFlags.hitLeft = false;
                    wallFlags.hitTop = false;
                    wallFlags.hitBottom = true;
                }
                if (animations.wallFlags.top) {
                    const ySteps = Math.abs(yRatio * (ballMaxY - ballMinY));
                    const xSteps = Math.abs(xRatio * remainingX);
                    if (xSteps < ySteps) {
                        console.log('going to x wall')
                        if (goingRight) {
                            newX = ballMaxX;
                        } else {
                            newX = ballMinX;
                        }
                        newY = animations.y + (yRatio * remainingX);
                    } else {
                        console.log('going to y wall')
                        if (goingRight) {
                            newX = animations.x + (xRatio * (ballMaxY - ballMinY));
                        } else {
                            newX = animations.x - (xRatio * (ballMaxY - ballMinY));
                        }
                        newY = ballMaxY; 
                    }
                    wallFlags.hitRight = false;
                    wallFlags.hitLeft = false;
                    wallFlags.hitTop = true;
                    wallFlags.hitBottom = false;
                }
                return {
                    xAnimation: animate(x, newX, {
                        duration: calculateDuration(animations.x, newX, animations.y, newY)
                    }),
                    yAnimation: animate(y, newY, {
                        duration: calculateDuration(animations.x, newX, animations.y, newY)
                    }),
                    previousX: animations.x,
                    previousY: animations.y,
                    x: newX,
                    y: newY,
                    wallFlags
                };
            }
        }

        const unsubscribeX = x.onChange(animatedBall);
        const unsubscribeY = y.onChange(animatedBall);
        return () => {
            unsubscribeX()
            unsubscribeY()
        }
    }, []);

    return (

        <Layout identity={{ title: 'Pong' }} back={{ href: '/sandbox/animations', title: 'Animation Home' }} noContainer>
            <div className={classes.mainContainer} onClick={() => x.set(1)}>
                <div className={classes.leftGoalContainer}>
                    <div className={classes.leftPaddleContainer}>
                        <motion.div className={classes.leftPaddle} drag='y' dragConstraints={{
                            top: 0,
                            left: 50,
                            right: 0,
                            bottom: ((windowDimensions.height * 0.6) - (windowDimensions.height * 0.6 * 0.2)),
                        }} />
                    </div>
                </div>
                <motion.div className={classes.ball} style={{ x, y }} />
            </div>
        </Layout>
    )
}

