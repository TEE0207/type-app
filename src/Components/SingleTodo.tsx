import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import { Todo } from './model';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";


 


// The Todo model we created and imported consist of all what one todo will have 
// The object props we created here consist the props types and pass it into the function as <Props> i.e this props defined the props types so we pass it in to React.FC
type Props = {
    // Imported todo = Todo, which make todo to be equal to 3 types : todo = todo(string) , todo = id(number) , todo = isDone(boolean)
     todo : Todo ;

     

     // while Todo[] array is when todo is more than one 
     todos : Todo[];

     // copied when we hoved on it in 
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo : React.FC <Props> = ({todo , todos, setTodos }) => {


    const [edit , setEdit] = useState <boolean>(false)
    const [editTodo , setEditTodo] = useState <string>(todo.todo)


    // Handle Done Function
  const handleDone = (id : number) => {
     setTodos
     (todos.map((todo) => 
        todo.id === id? {...todo, isDone :!todo.isDone} : todo))
  }


  // Handle Delete Function
  const handleDelete = (id : number) => {
    setTodos(
        todos.filter((todo) => todo.id !== id)
    )
  }

  const handleEdit = (e : React.FormEvent, id : number) => {
    e.preventDefault()

    setTodos(
        todos.map((todo) => (todo.id === id ? {...todo, todo : editTodo} : todo ))
    )
    setEdit(false)
  }

    const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() =>{
      inputRef.current?.focus()
  }, [edit])


  return (
    <form className='todos_single' onSubmit={(e) => handleEdit(e , todo.id)}>
        {/* // Todo consist of 3 types so we're setting todo = todo because todo is a string that we set in the model */}

        {
            edit ? (
               <input 
                ref = {inputRef}
               value={editTodo} 
               onChange={(e) => 
                setEditTodo(e.target.value)} 
                className= "todos_single_text"/>
            ) :(
                todo.isDone ?(
           <s className="todos_single_text">{todo.todo}</s>

            ):(
            <span className="todos_single_text">{todo.todo}</span>

            )
            )
        }

    
         <div>
            <span className="icon" onClick={() => {
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }}
            }>
             {React.createElement(AiFillEdit as React.FC)}           
            </span>

            <span className="icon" onClick={()=> handleDelete(todo.id)}>
               {React.createElement(RiDeleteBin4Fill as React.FC)}

            </span>
              {/* // Todo consist of 3 types so we're setting todo = id because id is a number that we set in the model */}
            <span className="icon" onClick={()=> handleDone(todo.id)}>
             {React.createElement(IoMdCheckmark as React.FC)}
            </span>
         </div>
    </form>
  )
}

export default SingleTodo