import React, { ChangeEventHandler, FormEventHandler, ReactChild } from "react";

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
const Form: React.FC<Props> = (props) => {
  const {fields} = props;
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        {
          fields.map(field => (
            <div key={field.label}>
              <label>{field.label}</label>
              { field.type === 'textarea' ?
                <textarea
                  // name=""
                  // id=""
                  // cols="30"
                  // rows="10"
                  value={field.value}
                  onChange={field.onChange}
                /> :
                <input
                  type={field.type || 'text'}
                  value={field.value}
                  onChange={field.onChange}
                />
              }

              <div>
              </div>
            </div>
          ))
        }
        {
          props.buttons
        }
      </form>
    </div>

  )
}

export default Form;