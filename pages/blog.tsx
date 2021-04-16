import Layout from '../components/base/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import React from 'react';

export default function BlogPage({ allPostsData }: any) {
  return (
    <Layout identity={{title: 'Blog'}}>
      <section>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}