import React from 'react';
import { map } from '../../utils/functions';
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
  return (
    <div className={styles.todos_wrapper}>
      <h2>TO-DOs</h2>
      <ul>
        {map(
          (todo) => (
            <Todo key={todo.id} todo={todo} />
          ),
          INITIAL_TODOS
        )}
      </ul>
    </div>
  );
};

export default Todos;
