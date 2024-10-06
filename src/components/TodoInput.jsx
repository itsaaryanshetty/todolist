import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTask, todoValue, setTodoValue}=props
 
  return (
    <header>
      <input placeholder="Type here" value={todoValue}
      onChange={(e)=>{
        setTodoValue(e.target.value)
      }}></input>
      <button onClick={()=>{
        handleAddTask(todoValue)
        setTodoValue('')
      }}>Add task</button>
    </header>
  )
}
