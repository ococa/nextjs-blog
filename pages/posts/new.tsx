import {NextPage} from "next";
import request from "../../package/utils/req";
import useForm from "../../package/utils/useForm";

const PostsNew: NextPage = () => {
  const onSubmit = (fd) => {
    console.log(fd)
    request('/api/v1/posts/new', {
      ...fd
    }).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  };

  const formData = {
    title: '',
    content: '',
  }

  const fileds = [
    {
      label: '文章标题', key: 'title'
    },
    {
      label: '文章内容', key: 'content', type: "textarea",
    }
  ]

  const buttons = <button>login</button>
  // @ts-ignore
  const { form } = useForm<RegisterForm>(formData, fileds, onSubmit, buttons)

  return (
        <div>
          { form }
        </div>
    );
}
export default PostsNew;

