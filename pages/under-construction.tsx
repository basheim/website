import Layout from '../components/base/layout';
import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';
import { Box, Typography } from '@material-ui/core';

export default function UnderConstructionPage({ }: any) {
    return (
        <Layout identity={{ title: 'Under Construction' }} back={{href: '/', title: 'Home'}}>
            <Box>
                <WarningIcon fontSize='large' color='error'/>
                <Typography variant="h6">Page is currently under construction.</Typography>
            </Box>

        </Layout>
    )
}

