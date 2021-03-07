import {useEffect, useState} from "react";
import axios from "axios";
import {NextPage} from "next";
import {Post} from "../api/v1/posts";

type Posts = Post [];
const PostIndex: NextPage = () => {

  const [ posts, setPosts ] = useState<Posts>([]);

  useEffect(() => {
    axios.get('/api/v1/posts').then(res => {
      console.log('res', { res })
      setPosts(res.data)
    })
  }, [])

  return (
    <div>
      文章列表
      { posts.map(i => (
        <div key={i?.title}>name: {i?.title}</div>
      ))}
    </div>
  )
}

export default PostIndex;