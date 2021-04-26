import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const useStyles = makeStyles((theme) => ({
    tooltipContainer: {
        position: 'relative',
        height: '100%',
        width: '100%'
    }
}));

export default function AdvancedMove(props: any) {
    const classes = useStyles();
    const { children } = props;
    const [{ x, y }, containerApi] = useSpring(() => ({ x: 0, y: 0 }));

    const containerBind = useDrag(({ down, offset: [ox, oy] }) => containerApi.start({ x: ox, y: oy, immediate: down }), {});

    return (
        <animated.div {...containerBind()} style={{ x, y }} className={classes.tooltipContainer} draggable='false'>
            {children}
        </animated.div>
    );
}

