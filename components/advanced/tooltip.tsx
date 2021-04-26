import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const useStyles = makeStyles((theme) => ({
    tooltipContainer: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    childrenContainer: {
        position: 'absolute',
        top:0,
        left:0
    },
    tooltip: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: theme.palette.grey[100],
        padding: 20
    }
}));

export default function AdvancedTooltip(props: any) {
    const classes = useStyles();
    const { children, html } = props;
    const [containerSpring, containerApi] = useSpring(() => ({ opacity: 1, delay: 1000, x: 0, y: 0 }));
    const [tooltipSpring, tooltipApi] = useSpring(() => ({ opacity: 0, scale: 0.01, delay: 1000 }));

    const tooltipOpen = () => {
        containerApi.start({ opacity: 0.25, delay: 300 });
        tooltipApi.start({ opacity: 0.75, scale: 1, delay: 300 });
    };

    const tooltipClose = () => {
        containerApi.start({ opacity: 1, delay: 0 });
        tooltipApi.start({ opacity: 0, scale: 0.01, delay: 0 });
    };

    const containerBind = useGesture({
        onHover: ({ active, dragging, down }) => {
            if (active && !dragging && !down) {
                tooltipOpen();
            } else {
                tooltipClose();
            }
        },
        onDrag: ({dragging}) => {
            if (dragging) {
                tooltipClose();
            } else {
                tooltipOpen();
            }
        },
        onPointerDown: () => {}
    }, {  });
        
    const AnimatedBox = animated(Box);
    const AnimatedPaper = animated(Paper);
    return (
        <AnimatedBox {...containerBind()} display='flex' alignItems='center' justifyContent='center' className={classes.tooltipContainer} >
            <AnimatedBox style={containerSpring} display='flex' alignItems='center' justifyContent='center' className={classes.childrenContainer}>
                {children}
            </AnimatedBox>
            <Box zIndex='tooltip'>
                <AnimatedPaper elevation={3} style={tooltipSpring} variant="outlined" dangerouslySetInnerHTML={{ __html: html }} className={classes.tooltip} />
            </Box>
        </AnimatedBox>
    );
}

