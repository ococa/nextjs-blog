import {getDatabaseConnection} from "../utils";
import {User} from "../entity/User";
import md5 from "md5";

export class Login {
    constructor(public username: string, public password: string) {
    }

    async validate() {
        const { username, password } = this;
        if (username.trim() === '' || password.trim() === '') {
            this.errors.username.push('请填写用户名')
        }
        const connection = await getDatabaseConnection();
        const user = await connection.manager.findOne(User, { where: { username } })
        if (!user?.username || user?.password !== md5(password)) {
            this.errors.username.push('login error')
        }
        // else {
            // this.errors.username.push('login success')
        // }
    }

    errors = { username: [], password: []}

    hasErrors() {
        return !!Object.values(this.errors).find(v => v.length > 0)
    }
}