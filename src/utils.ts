import {createConnection, getConnectionManager} from "typeorm";
import config from '../ormconfig.json';
import {Post} from "./entity/Post";
import {User} from "./entity/User";
import {Comment} from "./entity/Comment";
import 'reflect-metadata'; // 没有这个 没办法直接通过Post来访问数据库


const create = () => {
    // @ts-ignore
    return createConnection({
        ...config,
        entities: [Post, User, Comment]
    })
    // connection.manager.find(User);
}

const promise = (async function () {
    const manage = getConnectionManager();
    if (!manage.has('default')) {
        return create();
    } else {
        return manage.get('default');
        // 还可以加一个is connect的判断
    }
})();

// export
const getDatabaseConnection = async () => {
    console.log(promise)
    return promise;
}

export {
    getDatabaseConnection
}