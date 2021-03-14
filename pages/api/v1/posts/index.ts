import {NextApiHandler} from "next";

const getPosts = () : Index[] => {
  return [1, 2, 3,].map(i => ({
    title: 'post' + i,
    date: new Date().getFullYear(),
  }))
}

const posts: NextApiHandler = (req , res) => {
  res.status(200).json(getPosts())
}

type Index = { title: string, date: number }

export {
  getPosts,
}

export type { Index };

export default posts;
