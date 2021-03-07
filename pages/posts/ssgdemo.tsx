import {useEffect, useState} from "react";
import axios from "axios";
import {GetStaticProps, NextPage} from "next";
import {getPosts, Post} from "../api/v1/posts";

type Props = {
  posts: Post[]
}

const PostIndex: NextPage<Props> = (props) => {

  const { posts } = props;
  console.log('posts', posts)
  return (
    <div>
      文章列表
      { posts && posts.map(i => (
          <div key={i?.title}>name: {i?.title}</div>
        ))
      }
    </div>
  )
}

export default PostIndex;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  console.log('posts 0 ', posts)
  return {
    props: {
      posts
    }
  }
}