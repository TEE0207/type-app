import { useState } from "react";
import "./App.css"
import InputField from "./Components/InputField";
import { Todo } from "./Components/model";
import TodoList from "./Components/TodoList";


const App : React.FC = () => {

 const [todo , setTodo] = useState <string>("")
 const [todos , setTodos] = useState <Todo[]>([]) // Todo is imported from model.ts because that's where we describe what is going to be in the array

 // event type e = e:React.FormEvent
 const handleAdd = (e : React.FormEvent) => {
   e.preventDefault()

   if(todo){ // Date.now will give you random Id // if todo is present, setTodos to ...todos (the spread operator will bring bring all the todo that is inside it) and
    setTodos([...todos, {id : Date.now(), todo: todo, isDone : false}])
    setTodo("")
   }
 }

  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd} />
      <TodoList todos ={todos} setTodos ={setTodos}/>


    </div>
  );
}

export default App;
