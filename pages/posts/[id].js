import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';




/**
getStaticPaths 
is called first. You return some options and an array
 of parameters to feed into getStaticProps.

getStaticProps
is then called once for each set of
parameters you returned from getStaticPaths.
This step happens in parallel as well, to
 speed up the build. 

 */
export function getStaticProps(context) {
  console.log('context', context);
  // Add the "await" keyword like this:
  const postData = getPostData(context.params.id);

  return {
    props: {
      postData,
    },
  };
}

export function getStaticPaths() {
  console.log('getStaticPaths');
  const paths = getAllPostIds();
  // console.log('paths',paths[0].params.id);
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (

    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}