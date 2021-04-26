import Layout from '../../../components/base/layout';
import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import AdvancedMove from '../../../components/advanced/moving-wrapper';

const useStyles = makeStyles((theme) => ({
    borderCircle: {
        borderRadius: '80%'
    }
}));

export default function AdvancedMoveExample() {
    const classes = useStyles();
    return (
        <Layout identity={{ title: 'Advanced Move' }} back={{ href: '/sandbox/components', title: 'Components Home' }}>
            <AdvancedMove>
                <Image
                    priority
                    src="../../../website/images/profile.jpeg"
                    className={classes.borderCircle}
                    height={200}
                    width={200}
                    draggable='false'
                />
            </AdvancedMove>
        </Layout>
    )
}
