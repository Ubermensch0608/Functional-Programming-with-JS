import React, { useEffect, useState } from 'react';
import { filter, map } from '../../utils/functions';
import NewTodo from './NewTodo';
import Todo from './Todo';
import styles from './Todos.module.css';

const INITIAL_TODOS = [
  {
    id: '34n3j4ln3',
    todo: 'React-Query',
  },
  {
    id: 's3fsef3',
    todo: 'React-Testing-Library',
  },
  {
    id: 'sdflk3n2klr',
    todo: 'Functional-Programming',
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const getClickedIdHandler = (clickedId) => {
    setTodos((prevTodos) => filter((todo) => todo.id !== clickedId, prevTodos));
  };

  const saveTodoHandler = (newTodo) => {
    const newTodoForm = {
      id: Math.random(),
      todo: newTodo,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoForm]);
  };

  return (
    <div className={styles.todos_wrapper}>
      <h2>TO-DOs</h2>
      <ul>
        {map(
          (todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={getClickedIdHandler}
            />
          ),
          todos
        )}
      </ul>

      <NewTodo onSaveTodo={saveTodoHandler} />
    </div>
  );
};

export default Todos;
