import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from 'next/link';
import { animated, useSpring } from 'react-spring';
import { useHover } from 'react-use-gesture';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    cardContainer: {
        opacity: 0.7
    }
}));

export default function CardContainer(props: any) {
    const classes = useStyles();
    const { children, link} = props;
    const [spring, api] = useSpring(() => ({ scale: 1, config: { mass: 5, tension: 350, friction: 40}}));

    const bind = useHover(({ active }) => active ? api.start({ scale: 1.1 }) : api.start({scale: 1}), {});
    const AnimatedGrid = animated(Grid);
    return (
        <AnimatedGrid style={spring} {...bind()} item xs={12} md={6} className={classes.cardContainer}>
            <Link href={link}>
                <CardActionArea component="a">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                {children}
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia} />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Link>
        </AnimatedGrid>
    );
}