import Layout from '../../../components/base/layout';
import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import AdvancedTooltip from '../../../components/advanced/tooltip';
import { getMarkdown } from '../../../lib/markdown';

const useStyles = makeStyles((theme) => ({
    borderCircle: {
        borderRadius: '80%'
    },
    container: {
        top: '10vh'
    }
}));

export async function getStaticProps() {
    const data = await getMarkdown('tooltip');
    return {
        props: {
            data: data.contentHtml
        }
    };
}

export default function AdvancedTooltipExample({ data }: any) {
    const classes = useStyles();
    return (
        <Layout identity={{ title: 'Advanced Tooltip' }} back={{ href: '/sandbox/components', title: 'Components Home' }}>
            <AdvancedTooltip html={data}>
                <Image
                    priority
                    src="../../../website/images/profile.jpeg"
                    className={classes.borderCircle}
                    height={200}
                    width={200}
                />
            </AdvancedTooltip>
        </Layout>
    )
}

