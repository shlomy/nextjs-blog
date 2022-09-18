import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
// import Test from '../components/test';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';


export async function getServerSideProps() {
  console.log('getServerSideProps');
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  let idd = [
    {
      id: new Date() + '',
      title: 'When to Use Static Generation v.s. Server-side Rendering',
      date: '2020-01-02'
    },

  ]
  return {
    props: {
      allPostsData,
      idd
    },
  };
}
export default function Home({ allPostsData, idd }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {idd[0].id}
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {allPostsData.map((x) => (
          <li className={utilStyles.listItem} key={x.id}>
         
            <Link href={'posts/'+x.id}>
              <a>   {x.id}</a>
            </Link>
          </li>
        ))}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      {/* <Test value="prop value" /> */}

    </Layout>
  );
}