import {GetServerSideProps, NextPage} from 'next';
import {getDatabaseConnection} from '../../src/utils';
import { Post } from "src/entity/Post";

type Props = {
    post: {
        title: string,
        content: string,
        user: number,
    }
}
const PostIndex: NextPage<Props> = (props) => {
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


export const getServerSideProps: GetServerSideProps<any, { id: string }> = async (ctx) => {
    const connection = await getDatabaseConnection();
    const a = await connection.manager.findOne(Post, ctx.params.id);
    return Promise.resolve({
        props: {
            post: JSON.parse(JSON.stringify(a)),
        }
    })
}
