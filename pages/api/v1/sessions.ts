import {NextApiHandler} from "next";
import {Login} from "../../../src/model/login";
import withSession from "../../../package/utils/withSession";

const Sessions: NextApiHandler = withSession(async(req, res) => {

    const { username, password } = req.body;
    const login = new Login(username, password);
    await login.validate();
    console.log(login.hasErrors())
    if (login.hasErrors()) {
        res.setHeader('Content-Type', 'application/json; charset=utf8');
        res.statusCode = 422;
        res.json({ error: false, msg: login.errors});
        res.end();
    } else {
        req.session.set('currentUser', login.username);
        await req.session.save()
        res.setHeader('Content-Type', 'application/json; charset=utf8');
        res.statusCode = 200;
        res.json({ error: true, msg: 'success'});
        res.end();
    }
})

export default Sessions;