import styles from '../styles/Home.module.css'
import {GetServerSideProps, NextPage} from "next";
import {getDatabaseConnection} from "../src/utils";
import {Post} from "../src/entity/Post";
import Link from 'next/link';

type Props = {
  browser: string,
  posts: Post[] ,
}
const Home: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h1>文章列表</h1>
      {
        props?.posts.map(i => (
          <Link href={`/posts/${i?.id}`}>
            <a>{i?.content}</a>
          </Link>))
      }
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const connection = await getDatabaseConnection();
  const a = await connection.manager.find(Post);
  return Promise.resolve({
    props: {
      browser: '123123',
      posts: JSON.parse(JSON.stringify(a))
    }
  })
}
