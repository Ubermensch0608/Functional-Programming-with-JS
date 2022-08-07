import style from './Todo.module.css';

const Todo = ({ todo }) => {
  return (
    <li className={style.todo}>
      <span>{todo.todo}</span>
      <span>
        <button>delete</button>
      </span>
    </li>
  );
};

export default Todo;
