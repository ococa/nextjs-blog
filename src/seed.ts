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
    const u1 = new User();
    u1.username = 'username1';
    u1.password = 'password1';
    const result = await manage.save(u1)
    console.log(result)



    // console.log({
    //     post,
    //     comment,
    //     users,
    // })
    await connection.close();
}).catch(error => console.log(error));
