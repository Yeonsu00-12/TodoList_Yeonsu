import React, { useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState, useTodoDispatch } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding : 20px 32px;
  padding-bottom: 48px;
  overflow-y : auto;
`;

function TodoList() {
  const todos = useTodoState();
  // const dispatch = useTodoDispatch();

  // useEffect(() => {
  //   const storedTodos = localStorage.getItem('todos');
  //   if(storedTodos) {
  //     dispatch({type:'CREATE', todos: JSON.parse(storedTodos)});
  //   }
  // },[]);

  return (
  <TodoListBlock>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        done={todo.done}
      />
    ))}
  </TodoListBlock>
  );
}

export default TodoList;