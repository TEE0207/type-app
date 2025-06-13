import React, { useState } from "react";
import "./App.css"
import InputField from "./Components/InputField";
import { Todo } from "./Components/model";
import TodoList from "./Components/TodoList";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

// we import it's types for this to work

const App : React.FC = () => {

 const [todo , setTodo] = useState <string>("")
 const [todos , setTodos] = useState <Todo[]>([]) // Todo is imported from model.ts because that's where we describe what is going to be in the array
 
 const [completedTodos , setCompletedTodos] = useState<Todo[]>([]) // sent to TodoList component

 // event type e = e:React.FormEvent
 const handleAdd = (e : React.FormEvent) => {
   e.preventDefault()

   if(todo){ // Date.now will give you random Id // if todo is present, setTodos to ...todos (the spread operator will bring bring all the todo that is inside it) and
    setTodos([...todos, {id : Date.now(), todo: todo, isDone : false}])
    setTodo("")
   }
 }


  const onDragEnd = (result: DropResult) => {
    const {source , destination } = result

    if(!destination) return

    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    let add, active = todos, complete = completedTodos;

    if (source.droppableId === "TodoList"){
      add = active[source.index];
      active.splice(source.index, 1) ;
    } else {
      add = complete [source.index]
      complete.splice(source.index, 1)
    }

    if(destination.droppableId === "TodoList"){

   active.splice(destination.index,0 , add) ;
    } else {
       complete.splice(destination.index,0 , add) ;

    }

    setCompletedTodos(complete)
    setTodos(active)
  }
  return (

    <DragDropContext onDragEnd={onDragEnd}>  

    <div className="App">
      <span className="heading">Taskify</span>

      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd} />
      <TodoList 
      todos ={todos} 
      setTodos ={setTodos}
      completedTodos ={completedTodos}
      setCompletedTodos = {setCompletedTodos}
       />


    </div>
    </DragDropContext>
  );
}

export default App;
