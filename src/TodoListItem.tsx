import React from 'react';
import { DeleteTodo, EditTodo, Todo, ToggleTodo } from './types'

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo,
    editTodo: EditTodo,
    deleteTodo: DeleteTodo,
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
    return (
        <li style={{display: 'flex'}}>
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : undefined, flex:1 }}
            >
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)}
                /> {todo.text}
            </label>
           <div >
           <button onClick={() => editTodo(todo)}>✏️</button>
            <button onClick={() => deleteTodo(todo)}>🗑️</button>
           </div>
        </li>
    );
};