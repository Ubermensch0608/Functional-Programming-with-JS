import React, { useRef } from 'react';

const NewTodo = ({ onSaveTodo }) => {
  const newTodoRef = useRef(null);

  const submitNewTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = newTodoRef.current.value;
    if (newTodo.trim().length === 0) {
      return;
    }

    onSaveTodo(newTodo);
    newTodoRef.current.value = '';
  };

  return (
    <form onSubmit={submitNewTodoHandler}>
      <p>새로운 할일을 작성해보세요!</p>
      <input type="text" placeholder="책 읽기" ref={newTodoRef} />
      <button type="submit">등록</button>
    </form>
  );
};

export default NewTodo;
