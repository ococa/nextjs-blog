/**
 * 泛型的使用
 * 1 创建一个函数 initData的数据类型不固定，声明为T，并且在函数上标注<T>, 调用函数的时候传入T
 */
import React, { ChangeEventHandler, FormEventHandler, ReactChild, useCallback, useState } from "react";


type Props = {
  fields: {
    label: string,
    type?: 'text' | 'password' | 'textarea',
    value: string | number,
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  }[];
  onSubmit: FormEventHandler,
  buttons: ReactChild
}

type Field<T> = {
  label: string,
  type?: 'text' | 'password' | 'textarea' | string,
  key: keyof T
};

function useForm<T>(initData: T, fields: Field<T>[], onSubmit: (fd: T) => void, buttons: ReactChild) {

  const [formData, setFormData] = useState(initData);

  // initData = {username: "", password: ""}
  // initError = { username: [], password: []}
  const [errors, setErrors] = useState(() => {
    const e: { [k in keyof T]?: string[] } = {};
    Object.keys(initData).forEach(key => e[key] = [])
    return e;
  })

  const onChange = useCallback((key: keyof T, value: string | number) => {
    setFormData({...formData, [key]: value})
  }, [formData])

  // const form = <form></form>

  const _onSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit(formData)
  }, [formData, onSubmit])

  const form = (
    <>
      <form onSubmit={_onSubmit}>
        {
          fields.map(field => (
            <div key={field.label}>
              <label>{field.label}</label>
              {field.type === 'textarea' ?
                <textarea
                  // name=""
                  // id=""
                  // cols="30"
                  // rows="10"
                  value={formData[field.key].toString()}
                  onChange={(e) => {
                    onChange(field.key, e.target.value)
                  }}

                /> :
                <input
                  type={field.type || 'text'}
                  value={formData[field.key].toString()}
                  onChange={(e) => {
                    onChange(field.key, e.target.value)
                  }}
                />
              }
              <div>
              </div>
            </div>
          ))
        }
        {
          buttons
        }
      </form>
    </>

  )

  return {
    form: form
  }
}

export default useForm;