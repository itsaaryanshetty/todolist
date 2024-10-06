import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"



function App() {
  const [todos, setTodos]=useState([])
  const [todoValue, setTodoValue]= useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTask(newTodo){
    const newTodoList=[...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTask(index){
    const newTodoList=todos.filter((todo,todoIndex)=>{
      return todoIndex!==index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleEditTask(index){
    const editedValue= todos[index]
    setTodoValue(editedValue)
    handleDeleteTask(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTask={handleAddTask}/>
      <TodoList handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} todos={todos}/>
    </>
  )
}

export default App
