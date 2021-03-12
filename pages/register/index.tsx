import {GetServerSideProps, NextPage} from 'next';
import {useCallback, useState} from 'react';
import request from "../../package/utils/req";


type RegisterForm = {
    username?: string,
    password?: string,
    passwordConfirmation?: string,
}

const RegisterIndex: NextPage = () => {

    const [ signUpData, setSignUpData ] = useState<RegisterForm>({});

    const [ errors, setErrors ] = useState({});

    const onsubmit = useCallback((e) => {
        e.preventDefault();
        request('/api/v1/register', {
            username: signUpData.username,
            password: signUpData.password,
            passwordConfirmation: signUpData.passwordConfirmation,
        }).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
            setErrors(e.response)
        })
        console.log(signUpData)
    }, [ signUpData ])
    return (<div>

        <hr/>
        {JSON.stringify(errors)}
        <hr/>
        <form onSubmit={onsubmit}>
            <label htmlFor="username">
                username
            </label>
            <input
                type="text"
                value={signUpData.username}
                onChange={(e) => {
                    setSignUpData({ ...signUpData, username: e.target.value })
                }}
            />
            <label htmlFor="password">
                password
            </label>
            <input
                type="password"
                value={signUpData.password}
                onChange={(e) => {
                    setSignUpData({ ...signUpData, password: e.target.value })
                }}
            />
            <label htmlFor="password">
                confirm password
            </label>
            <input
                type="password"
                value={signUpData.passwordConfirmation}
                onChange={(e) => {
                    setSignUpData({ ...signUpData, passwordConfirmation: e.target.value })
                }}
            />
            <button>zhuce</button>
        </form>
    </div>)
}

export default RegisterIndex;

export const getServerSideProps: GetServerSideProps = (ctx) => {
    return Promise.resolve({
        props: {
            a: '123'
        }
    })
}
