import React from 'react'
import "./style.css"
import { Todo } from './model'
import SingleTodo from './SingleTodo'

interface Props {
    todos : Todo[]
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC <Props> = ({todos , setTodos}) => {
  return (

    <div className="container">
       <div className="todos">
       <span className='todos_heading'> Active Tasks </span>

       {
         todos.map((todo) => (

         <SingleTodo 
            todo = {todo} 
            key= {todo.id}
            // This is taking all the array into SingleTodo
            todos = {todos}
            setTodos = {setTodos}
              />
        ))
       }
       </div>

       <div className="todos_remove">
          
          <span className='todos_heading'> Completed Tasks </span>

       {
         todos.map((todo) => (

         <SingleTodo 
            todo = {todo} 
            key= {todo.id}
            // This is taking all the array into SingleTodo
            todos = {todos}
            setTodos = {setTodos}
              />
        ))
       }

       </div>


    </div>
   
  )
}

export default TodoList