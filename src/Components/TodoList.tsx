import React from 'react'
import "./style.css"
import { Todo } from './model'
import SingleTodo from './SingleTodo'
import { Droppable } from 'react-beautiful-dnd'

interface Props {
    todos : Todo[]
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
    setCompletedTodos : React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos : Todo[]
}

const TodoList: React.FC <Props> = ({todos , setTodos , completedTodos ,setCompletedTodos}) => {
  return (

    <div className="container">

      <Droppable droppableId='TodoList'>

        {
          (provided,snapshot) => (
              <div className={`todos ${snapshot.isDraggingOver? "dragactive " : ""}`} ref ={provided.innerRef} {...provided.droppableProps}>
       <span className='todos_heading'> Active Tasks </span>

       {
         todos.map((todo , index) => (

         <SingleTodo 
         index = {index}
            todo = {todo} 
            key= {todo.id}
            // This is taking all the array into SingleTodo
            todos = {todos}
            setTodos = {setTodos}
              />
        ))
       }

                   {provided.placeholder}
       </div>
          )
        }

 
      </Droppable>
      
        <Droppable droppableId='TodosRemove'>
           {

            (provided , snapshot) => (
                    <div className={ `todos_remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}` } ref ={provided.innerRef} {...provided.droppableProps}>
          
          <span className='todos_heading'> Completed Tasks </span>

       {
         completedTodos.map((todo, index) => (

         <SingleTodo
           index = {index} 
            todo = {todo} 
            key= {todo.id}
            // This is taking all the array into SingleTodo
            todos = {completedTodos}
            setTodos = {setCompletedTodos}
              />
        ))
       }
                 {provided.placeholder}
       </div>
            )
           }

        </Droppable>
       


    </div>
   
  )
}

export default TodoList