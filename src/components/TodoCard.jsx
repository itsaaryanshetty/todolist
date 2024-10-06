import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTask, handleEditTask, index}=props
  return (
    <li className="todoItem">
      {children}
      <div className='actionsContainer'>
        <button className="edit" onClick={()=>{
          handleEditTask(index)
        }}>Edit</button>
        <button className="delete" onClick={()=>{
          handleDeleteTask(index)
        }}>Delete</button>
      </div>
    </li>
  )
}
