import Link from 'next/link';
import Head from 'next/head';
import LayoutPage from './layoutPage';


export default function FirstPost() {
  return (
    <LayoutPage>
      <Head>
        <title>First Post </title>
      </Head>
      <h1>First Post 1 f</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </LayoutPage>
  );
}