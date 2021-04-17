import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkWrapper from 'next/link';

const useStyles = makeStyles((theme: any) => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    sidebarLinks: {
        cursor: 'pointer'
    }
}));

export default function Sidebar(props: any) {
    const classes = useStyles();
    const { archives, social } = props;

    return (
        <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
      </Typography>
            {archives.map((archive: any) => (
                <LinkWrapper href={archive.url}>
                    <Link display="block" variant="body1" key={archive.title} className={classes.sidebarLinks}>
                        {archive.title}
                    </Link>
                </LinkWrapper>
            ))}
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
      </Typography>
            {social.map((network: any) => (
                <Link display="block" variant="body1" key={network.title} href={network.url} className={classes.sidebarLinks}>
                    <Grid container direction="row" spacing={1} alignItems="center">
                        <Grid item>
                            <network.icon />
                        </Grid>
                        <Grid item>{network.name}</Grid>
                    </Grid>
                </Link>
            ))}
        </Grid>
    );
}

Sidebar.propTypes = {
    archives: PropTypes.array,
    description: PropTypes.string,
    social: PropTypes.array,
    title: PropTypes.string,
};