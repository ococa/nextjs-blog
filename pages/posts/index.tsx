import {GetServerSideProps, NextPage} from 'next';
import {getDatabaseConnection} from '../../src/utils';
import { Post } from "src/entity/Post";

type Props = {
  post: {
    title: string,
    content: string,
    user: number,
  },
  ctx
}
const PostIndex: NextPage<Props> = (props) => {

  console.log(props.ctx)
  return (
    <div>
      文章标题：
      { props.post.title }
      文章内容：
      { props.post.content }

    </div>
  )
}

export default PostIndex;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const post = { title: '123', content: '123' }
  const connection = await getDatabaseConnection();
  const a = await connection.manager.find(Post);

  console.log(ctx)
  return Promise.resolve({
    props: {
      post,
    }
  })
}
