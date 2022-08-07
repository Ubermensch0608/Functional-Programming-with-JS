import style from './Todo.module.css';

const Todo = ({ todo, onDeleteTodo }) => {
  const deleteTodoHandler = (clickId) => {
    onDeleteTodo(clickId);
  };

  return (
    <li className={style.todo}>
      <span>{todo.todo}</span>
      <span>
        <button onClick={() => deleteTodoHandler(todo.id)}>delete</button>
      </span>
    </li>
  );
};

export default Todo;
