import React from 'react'
import { useState } from 'react'
import Todolist from './Todolist';
const Todo = () => {
    let [newTodo,setTodo]=useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) =>{
      setTodo(e.target.value)
  }
  const onDelete=(id) =>{
      let newTodos=todos.filter((todo)=> todo.id !== id);
      setTodos(newTodos)
  }



  return (
    <div>Todo
      <input type="text" onChange={handleChange} value={newTodo}/>
      <button onClick={() => {
          setTodos([
              ...todos,
              {
                  id : Date.now(),
                  value : newTodo,
                  isCompleted : false
              }
          ])
          setTodo("")
      }}>Add</button>
      {todos.map((todo) => (
       <Todolist todo={todo} onDelete={onDelete}/>
      ))}
    </div>
  )
}

export default Todo