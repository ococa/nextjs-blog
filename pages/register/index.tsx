import { GetServerSideProps, NextPage } from 'next';
import { useCallback, useState } from 'react';
import request from "../../package/utils/req";
import Form from "../../package/component/form";


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
    request('/api/v1/register', {
      username: formData.username,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
    }).then(res => {
      console.log('register')
      console.log(res);
      console.log('register')

      // window.location.href = '/login'
    }).catch(e => {
      console.error('register')
      console.error(e);
      console.error('register')
      setErrors(e.response)
    })
    console.log(formData)
  }, [formData])

  const onChangeHandler = useCallback(({key, value}) => {
    setFormData({...formData, [key]: value})
  }, [formData])

  return (<div>
    <hr/>
    <h1>register</h1>
    <hr/>
    <Form
      fields={[
        {
          label: '用户名', value: formData.username,
          onChange: e => onChangeHandler({key: 'username', value: e.target.value}),
        },
        {
          label: '密码', value: formData.password, type: "password",
          onChange: e => onChangeHandler({key: 'password', value: e.target.value}),
        },
        {
          label: '密码', value: formData.passwordConfirmation, type: "password",
          onChange: e => onChangeHandler({key: 'passwordConfirmation', value: e.target.value}),
        }
      ]}
      onSubmit={onsubmit}
      buttons={
        <button>zhuce</button>
      }
    />
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
