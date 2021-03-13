import {GetServerSideProps, NextPage} from 'next';
import {useCallback, useState} from 'react';
import request from "../../package/utils/req";


type RegisterForm = {
    username?: string,
    password?: string,
    passwordConfirmation?: string,
}

const RegisterIndex: NextPage = () => {

    const [formData, setFormData] = useState<RegisterForm>({});

    const [errors, setErrors] = useState({});

    const onsubmit = useCallback((e) => {
        e.preventDefault();
        request('/api/v1/sessions', {
            username: formData.username,
            password: formData.password,
        }).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
            setErrors(e.response)
        })
        console.log(formData)
    }, [formData])
    return (<div>
        <hr/>
        <h1>login </h1>
        <hr/>
        <form onSubmit={onsubmit}>
            <div>
                <label htmlFor="username">
                    username
                </label>
                <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => {
                        setFormData({...formData, username: e.target.value})
                    }}
                />
            </div>

            <div>
                <label htmlFor="password">
                    password
                </label>
                <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => {
                        setFormData({...formData, password: e.target.value})
                    }}
                />
            </div>

            <button>login</button>
        </form>
    </div>)
}

export default RegisterIndex;

export const getServerSideProps: GetServerSideProps = (ctx) => {
    return Promise.resolve({
        props: {}
    })
}
