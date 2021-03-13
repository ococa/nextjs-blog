import { GetServerSideProps, NextPage } from 'next';
import request from "../../package/utils/req";
import withSession from "../../package/utils/withSession";
import useForm from "../../package/utils/useForm";

type RegisterForm = {
  username?: string,
  password?: string,
}

const RegisterIndex: NextPage = () => {
  const formData = {
      username: '',
      password: '',
  }

  const onSubmit = (fd) => {
    console.log(fd.username)
    request('/api/v1/sessions', {
      username: fd.username,
      password: fd.password,
    }).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  };
  const fileds = [
    {
      label: '用户名', key: 'username'
    },
    {
      label: '密码', key: 'password', type: "password",
    }
  ]

  const buttons = <button>login</button>
  // @ts-ignore
  const { form } = useForm<RegisterForm>(formData, fileds, onSubmit, buttons)

  return (<div>
    <hr/>
    <h1>login </h1>
    <hr/>
      {form}
    <hr/>
  </div>)
}

export default RegisterIndex;

export const getServerSideProps: GetServerSideProps = withSession((ctx) => {
  return Promise.resolve({
    props: {}
  })
})
