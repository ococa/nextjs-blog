import { NextApiHandler } from "next";
import withSession from "../../../../package/utils/withSession";
import { Post } from "../../../../src/entity/Post";
import { getDatabaseConnection } from "../../../../src/utils";

const postNew: NextApiHandler = withSession(async (req, res) => {
  if(req.method === 'POST') {
    const { title, content } = req.body;
    const user = req.session.get('currentUser');
    // const user =
    const post = new Post();
    post.title = title;
    post.content = content;
    post.author = user;
    console.log('user', { ...post })
    const connection = await getDatabaseConnection();
    const result = await connection.manager.save(post)
    res.json(result)
  }
})

export default postNew;