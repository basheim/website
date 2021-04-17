import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

const useStyles = makeStyles((theme: any) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        }
    },
}));

export default function MainFeaturedPost(props: any) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Paper className={classes.mainFeaturedPost}>
            <div className={classes.overlay} />
            <Link href={`/blog/posts/${post.id}`}>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {post.description}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Link>
        </Paper >
    );
}

MainFeaturedPost.propTypes = {
    post: PropTypes.object,
};