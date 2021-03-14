import {GetServerSideProps, NextPage} from 'next';
import {getDatabaseConnection} from '../../src/utils';
import { Post } from "src/entity/Post";
import Link from 'next/link';

type Props = {
  posts: {
    title: string,
    content: string,
    user: number,
    id: number,
  }[],
  ctx
}
const PostIndex: NextPage<Props> = (props) => {

  return (
    <div>
      <h1>文章列表</h1>
      <hr/>
      {
        props.posts.map(post => (<div>
          <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </div>))
      }
    </div>
  )
}

export default PostIndex;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const connection = await getDatabaseConnection();
  const a = await connection.manager.find(Post);
  return Promise.resolve({
    props: {
      posts: JSON.parse(JSON.stringify(a)),
    }
  })
}
