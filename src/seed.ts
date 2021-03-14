import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";
import {Comment} from "./entity/Comment";
import {User} from "./entity/User";

createConnection().then(async connection => {
    // const post = await connection.manager.find(Post);
    // const comment = await connection.manager.find(Comments);
    // const users = await connection.manager.find(Users);
    const manage = connection.manager;
    const u1 = new User('username1', 'password1');
    const result = await manage.save(u1)
    console.log(result)


    const p1 = new Post();
    p1.title = 'post 1';
    p1.content = 'post content 1';
    p1.author = u1;
    const res2 = await manage.save(p1);
    console.log(res2);

    const c1 = new Comment();
    c1.user = u1;
    c1.post = p1;
    c1.content = 'awesome!';
    const r3 = await manage.save(c1);
    console.log(r3);
    // console.log({
    //     post,
    //     comment,
    //     users,
    // })
    await connection.close();
}).catch(error => console.log(error));
