import Checkbox from "./Checkbox";

type TTodoListProps = {
  todos: TTodo[];
};

const Todolist = (props: TTodoListProps) => {
  const {};
  return (
    <>
      <ul>
        <li className="flex justify-between items-center py-[10px] px-[15px] bg-[rg]">
          <Checkbox checked={todo.completed}>
            <span className="">Your task here...</span>
          </Checkbox>
          <button className="w-6 h-6 bg-[rgba(53,56,62,0.1)]">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                fill="#4F4F4F"
              />
              <path
                d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                fill="#4F4F4F"
              />
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Todolist;
