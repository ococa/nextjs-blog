import {createConnection, getConnectionManager} from "typeorm";

const promise = (async function () {
    console.log('chuangjian')
    const manage = getConnectionManager();
    if (!manage.has('default')) {
        return createConnection();
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