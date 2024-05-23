import logo from './logo.svg';
import './App.css';
import { TodoProvide } from './TodoContext';
import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function App() {


let [todos ,setTodos]=useState([]);

let addTodo=(task)=>{
   setTodos((old)=> [...old , { id:Date.now() , ...task}] )
}

let updateTodo=(id,task)=>{
 setTodos((old)=> old.map((each)=> each.id === id ? task : each )  )
}

let deleteTodo=(id)=>{
  setTodos((old)=> old.filter((each)=> each.id !== id ))
}

let todoCompleted = (id)=>{
  setTodos((old)=> old.map((each)=> each.id === id ? {...each, completed:!each.completed} : each )  )
}

useEffect(()=>{
   let Todo = JSON.parse(localStorage.getItem("todos"))
    if(Todo && Todo.length > 0){
      setTodos(Todo)
    }

},[])

useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
},[todos])




  
  return (
   <TodoProvide value={{todos,addTodo,updateTodo,deleteTodo,todoCompleted}} >
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>
                        
                        (
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                            </div>
                       )
                        
                        )}
                    </div>
                </div>
            </div>
   </TodoProvide>
  );
}

export default App;
