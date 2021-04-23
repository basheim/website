import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardContainer from '../util/card-container';

export default function FeaturedPost(props: any) {
    const { post, tag } = props;
    return (
        <CardContainer link={`/blog/posts/${post.id}`}>
            <Typography component="h2" variant="h5">
                {tag}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
                {post.title}
            </Typography>
            <Typography variant="body2">
                {post.description}
            </Typography>
            <Typography variant="caption" color="primary">
                Continue reading...
                                </Typography>
        </CardContainer>
    );
}

FeaturedPost.propTypes = {
    post: PropTypes.object,
    tag: PropTypes.string
};