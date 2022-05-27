import React, { useState } from 'react'
import styles from './todo.module.css'
const Todolist = ({todo , onDelete}) => {
    const [isComplete,setIsComplete]=useState(todo.isComplete);
  return (
    <div key={todo.id} className={styles.item}>
    <input type="checkbox"
    checked={isComplete}
    onChange={(e)=>{
        setIsComplete(e.target.checked)
    }}
    />
    <div className={isComplete ? styles.check : ""}>{todo.value}</div>
    <button onClick={()=> onDelete(todo.id)}>Remove</button>
    </div>
  )
}

export default Todolist