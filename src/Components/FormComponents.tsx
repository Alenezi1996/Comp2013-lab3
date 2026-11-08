//Aform componots that will have a text input for the todo title
//and a button to submit the todo
//later it will be used to edit the todos as well

import type { FormComponentProps } from "./TodoApp";

export default function FormComponent({
  title,
  handleFormOnchange,
  handleOnSubmit,
}: FormComponentProps) {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleFormOnchange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
