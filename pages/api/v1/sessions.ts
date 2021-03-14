import {NextApiHandler} from "next";
import {Login} from "../../../src/model/login";
import withSession from "../../../package/utils/withSession";

const Sessions: NextApiHandler = withSession(async(req, res) => {

    const { username, password } = req.body;
    const login = new Login(username, password);
    await login.validate();
    if (login.hasErrors()) {
        res.setHeader('Content-Type', 'application/json; charset=utf8');
        res.statusCode = 422;
        res.json({ isError: true, msg: login.errors});
        res.end();
    } else {
        req.session.set('currentUser', login);
        await req.session.save()
        res.setHeader('Content-Type', 'application/json; charset=utf8');
        res.statusCode = 200;
        res.json({ isError: false, msg: 'success'});
        res.end();
    }
})

export default Sessions;