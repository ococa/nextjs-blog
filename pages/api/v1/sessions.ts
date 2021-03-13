import {NextApiHandler} from "next";
import {getDatabaseConnection} from "../../../src/utils";
import {User} from "../../../src/entity/User";
import md5 from "md5";
import {Login} from "../../../src/model/login";

const Sessions: NextApiHandler = async (req, res) => {

    const { username, password } = req.body;
    // if (!username || !password) {
        // return false;
    // }
    // const user = new User(username, password)
    // const connection = await getDatabaseConnection();
    //
    // const user = await connection.manager.findOne(User, { where: { username } })
    const login = new Login(username, password);
    await login.validate();
    if (login.hasErrors()) {
        res.setHeader('Content-Type', 'application/json; charset=utf8');
        res.statusCode = 422;
        res.json({ error: false, msg: login.errors});
        res.end();
    } else {
        res.setHeader('Content-Type', 'application/json; charset=utf8');
        res.statusCode = 200;
        res.json({ error: true, msg: 'success'});
        res.end();
    }

}
export default Sessions;