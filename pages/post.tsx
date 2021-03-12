import {GetServerSideProps, NextPage} from 'next';
import {getDatabaseConnection} from '../src/utils';

type Props = {
    post: {
        title: string,
        content: string,
    }
}

const Post: NextPage<Props> = (props) => {

    return (
        <div>
            title: { props.post.title }
            content: { props.post.content }
        </div>
    )
}

export default Post;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const post = { title: '123', content: '123' }
    const connection = await getDatabaseConnection();
    const a = await connection.manager.find(Post);

    return Promise.resolve({
        props: {
            post,
        }
    })
}
