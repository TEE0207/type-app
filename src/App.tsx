import { useState } from "react";
import "./App.css"
import InputField from "./Components/InputField";
import { Todo } from "./Components/model";


const App : React.FC = () => {

 const [todo , setTodo] = useState <string>("")
 const [todos , setTodos] = useState <Todo[]>([]) // Todo is imported from model.ts because that's where we describe what is going to be in the array

 const handleAdd = (e : React.FormEvent) => {
   e.preventDefault()
 }

  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd} />
    </div>
  );
}

export default App;
