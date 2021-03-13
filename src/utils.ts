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
}

// 解决connect 多次创建报错问题
const promise = (async function () {
    const manage = getConnectionManager();
    if (manage.has('default')) {
        // 还可以加一个is connect的判断
        await manage.get('default').close();
    }
    return create();
})();

// export
const getDatabaseConnection = async () => {
    return promise;
}

export {
    getDatabaseConnection
}