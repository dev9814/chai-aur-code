import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Toda msg",
            completed: false
        },
    ],

    // Here we will name methods and pass parameters but not define them
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext) // here we are talking about todocontext
}

export const TodoProvider = TodoContext.Provider