import { GetServerSideProps, NextPage } from 'next';
import request from "../../package/utils/req";
import useForm from "../../package/utils/useForm";


type RegisterForm = {
  username?: string,
  password?: string,
  passwordConfirmation?: string,
}

const RegisterIndex: NextPage = () => {

  const formData = {
    username: '',
    password: '',
    passwordConfirmation: '',
  }

  const onSubmit = (fd) => {
    request('/api/v1/register', {
      ...fd
    }).then(res => {
      console.log(res)
      // window.location.href = '/login'
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
    },
    {
      label: '确认密码', key: 'passwordConfirmation', type: "password",
    }
  ]

  const buttons = <button>login</button>
  // @ts-ignore
  const { form } = useForm<RegisterForm>(formData, fileds, onSubmit, buttons)


  return (<div>
    <hr/>
    <h1>register</h1>
    <hr/>
    { form }
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
