import {getDatabaseConnection} from "../../../src/utils";
import {User} from "../../../src/entity/User";
import md5 from "md5";

export default async (req, res) => {
    const { username, password, passwordConfirmation } = req.body;
    if (!username || !password || !passwordConfirmation) {
        res.status(500).json({ error: true, msg: 'username or password cant be null'})
        return;
    }
    if (password !== passwordConfirmation) {
        res.status(422).json({ error: true, msg: 'the password is different'})
        return;
    }
    const connection = await getDatabaseConnection();
    const userList = await connection.manager.find(User, { username });

    if (userList.length > 0) {
        res.status(500).json({ error: true, msg: 'username is already register'})
    } else {
        const user = new User(username, md5((password)));
        const result = await connection.manager.save(user);
        res.status(200).json(result)
    }
    // await connection.manager.close()
}
