import {GetServerSideProps, NextPage} from 'next';
import {getDatabaseConnection} from '../../src/utils';
import { Post } from "src/entity/Post";
import Link from 'next/link';
import { useEffect } from "react";

type Props = {
  posts: {
    title: string,
    content: string,
    user: number,
    id: number,
  }[],
  pagination: {
    count: number,
    pageSize: number,
    pageNo: number
  }
}
const PostIndex: NextPage<Props> = (props) => {

  useEffect(() => {
    // const
    // const a = queryString(window.location.search);
    // console.log(a)
  }, [])


  const { posts, pagination: { pageSize, pageNo, count} } = props;
  console.log('page', {
    pageSize,
    pageNo,
    count
  })
  return (
    <div>
      <h1>文章列表</h1>
      <hr/>
      {
        posts.map(post => (<div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </div>))
      }
      <hr/>
      <footer>
        <div>
          { pageNo !== 1 && <Link
            href={`/posts/?pageSize=${pageSize}&pageNo=${pageNo - 1}`}
          >
            <a>上一页</a>
          </Link>}
        </div>
        <div>
          {
            Math.ceil(count/pageSize) !== pageNo && <Link
              href={`/posts/?pageSize=${pageSize}&pageNo=${pageNo + 1}`}
            >
              <a>下一页</a>
            </Link>
          }

        </div>
        当前第{pageNo}页/总计{Math.ceil(count/pageSize)}页
      </footer>
    </div>
  )
}


export default PostIndex;


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  // const query = ctx.query;
  let { pageSize = 10, pageNo = 1 } = ctx.query;
  pageNo = parseInt(pageNo.toString()) > 0 ? parseInt(pageNo.toString()) : 1;
  pageSize = parseInt(pageSize.toString());
  const connection = await getDatabaseConnection();
  const a = await connection.manager.findAndCount(Post, { take: pageSize, skip:  pageSize * ( pageNo - 1) });
  return Promise.resolve({
    props: {
      posts: JSON.parse(JSON.stringify(a[0])),
      pagination: {
        count: a[1],
        pageSize,
        pageNo,
      }
    }
  })
}
