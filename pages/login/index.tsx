import { GetServerSideProps, NextPage } from 'next';
import { useCallback, useState } from 'react';
import request from "../../package/utils/req";
import withSession from "../../package/utils/withSession";
import Form from "../../package/component/form";


type RegisterForm = {
  username?: string,
  password?: string,
}

const RegisterIndex: NextPage = () => {

  const [formData, setFormData] = useState<RegisterForm>({
    username: '',
    password: '',
  });

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

  const onChangeHandler = useCallback(({key, value}) => {
    setFormData({...formData, [key]: value})
  }, [formData])

  return (<div>
    <hr/>
    <h1>login </h1>
    <hr/>
    <Form
      fields={[
        {
          label: '用户名', value: formData.username,
          onChange: e=> onChangeHandler({key:'username', value: e.target.value}),
        },
        {
          label: '密码', value: formData.password, type: "password",
          onChange: e=> onChangeHandler({key:'password', value: e.target.value}),
        }
      ]}
      onSubmit={onsubmit}
      buttons={
        <button>login</button>
      }
    />
    <hr/>
  </div>)
}

export default RegisterIndex;

export const getServerSideProps: GetServerSideProps = withSession((ctx) => {
  console.log(ctx.req.session.get('currentUser'));
  return Promise.resolve({
    props: {}
  })
})
