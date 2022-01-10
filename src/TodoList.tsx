import React from 'react'
import { TodoListItem } from './TodoListItem';
import { DeleteTodo, EditTodo, ToggleTodo, Todo } from './types';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    editTodo: EditTodo;
    deleteTodo: DeleteTodo
  }

export const TodoList: React.FC<Props> = ({todos, toggleTodo, editTodo, deleteTodo}) => {
  console.log(todos);
  
    return (
        <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    )
}