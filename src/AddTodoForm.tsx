import React, { useEffect, useState } from 'react'
import { AddTodo, Todo } from './types';

interface Props {
    addTodo: AddTodo;
    newTodo: Todo
  }

export const AddTodoForm: React.FC<Props> = ({addTodo, newTodo}) => {
    const [todo, setTodo] = useState(newTodo);

    useEffect(() => {
      setTodo(newTodo)
    }, [newTodo])
    
    return (
        <form style={{flexDirection:'row', display:'flex'}}>
          <input 
            type="text"
            value={todo.text}
            onChange={e => {setTodo({...todo, text: e.target.value})}} 
            style={{border:'2px solid grey'}}
          />
         <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(todo);
          setTodo({text:'', complete:false});
        }}
      >Add Todo</button>
        </form>
      );
}
