import { createContext,useContext } from "react";
import React from "react";

export let TodoContext = React.createContext(
    {
        todos:[{
            id:1,
            todo:"todo-message",
            completed:false
        }],

        addTodo:(task)=>{},
        updateTodo:(id,task)=>{},
        deleteTodo:(id)=>{},
        todoCompleted:(id)=>{}
    }
);

export let TodoProvide = TodoContext.Provider ;

export function useTodo(){
    return useContext(TodoContext)
}