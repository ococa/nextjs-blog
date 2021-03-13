import {getDatabaseConnection} from "../../../src/utils";
import {User} from "../../../src/entity/User";
import md5 from "md5";

export default async (req, res) => {
    const { username, password, passwordConfirmation } = req.body;

    const user = new User(username, password, passwordConfirmation);
    await user.validate();
    let result;
    if (await user.hasErrors()) {
        result = await user.errors;
    } else {
        const connection = await getDatabaseConnection()
        result = await connection.manager.save(user);
    }
    res.status(200).json(result)
}
