import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodo, Todo } from './types';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

const newTodo: Todo = {
  text: '',
  complete: false
}

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTask, setNewTask] = useState(newTodo);

  const addTodo: AddTodo = (newTd: Todo) => {
    setTodos([...todos, newTd]);
    setNewTask(newTodo)
  };

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (selectedTodo: Todo) => {
    setTodos(todos.filter(todo_i => todo_i !== selectedTodo))
  }

  const editTodo = (selectedTodo: Todo) => {
    console.log(selectedTodo)
    setNewTask(selectedTodo)
    setTodos(todos.filter(todo_i => todo_i !== selectedTodo))
  }

  return (<>
    <div style={{ display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}}>
      <div style={{ background: '#e6e6e6', borderRadius: 5, padding: 20, margin:40}}>
        <h1>Todos</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
        <AddTodoForm addTodo={addTodo} newTodo={newTask}/>
      </div>
    </div>
  </>
  );
}

export default App;