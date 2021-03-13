import {NextPage} from "next";
import Form from "../../package/component/form";
import { useCallback, useState } from "react";
import request from "../../package/utils/req";

const PostsNew: NextPage = () => {

  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });


  const onsubmit = useCallback((e) => {
    e.preventDefault();
    request('/api/v1/post/new', {
      ...formData
    }).then(res => {
      console.log(res)
    }).catch(e => {
      console.error(e)
    })
  }, [formData])

  const onChangeHandler = useCallback(({key, value}) => {
    setFormData({...formData, [key]: value})
  }, [formData])



  return (
        <div>
          <Form
            fields={[
              {
                label: '标题', value: formData.title,
                onChange: e=> onChangeHandler({key:'title', value: e.target.value}),
              },
              {
                label: '密码', value: formData.content, type: "textarea",
                onChange: e=> onChangeHandler({key:'content', value: e.target.value}),
              }
            ]}
            onSubmit={onsubmit}
            buttons={
              <button>提交</button>
            }
          />
        </div>
    );
}
export default PostsNew;

