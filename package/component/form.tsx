import React, { ChangeEventHandler, FormEventHandler, ReactChild } from "react";

type Props = {
  fields: {
    label: string,
    type?: 'text' | 'password',
    value: string | number,
    onChange: ChangeEventHandler<HTMLInputElement>,
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
              <input
                type={field.type || 'texts'}
                value={field.value}
                onChange={field.onChange}
              />
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