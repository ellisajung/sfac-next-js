import { useState } from "react";
import { Action } from "../reducer/todoReducer";
import Button from "./html/Button";
import Input from "./html/Input";

type TodoEditorProps = {
  dispatch: React.Dispatch<Action>;
};
const TodoEditor = (props: TodoEditorProps) => {
  const [text, setText] = useState("");
  const { dispatch } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };
  return (
    <>
      <form action="" className="flex gap-2" onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter Your Todo"
          value={text}
          onChange={onChangeHandler}
        />
        <Button type="submit" style={"w-[77px] bg-[#4F4F4F] text-white"}>
          Add
        </Button>
      </form>
    </>
  );
};
export default TodoEditor;
