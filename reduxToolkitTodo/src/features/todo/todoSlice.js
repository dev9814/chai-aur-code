import { createSlice, nanoid } from "@reduxjs/toolkit";

// how will the first state will be
const initialState = {
    todos: []
}

export const todoSLice = createSlice({
    name: 'todo',
    initialState,
    reducers: { // In reducers we write methods
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)


            console.log(action.payload);

        },

    }
})

export const {addTodo, removeTodo} = todoSLice.actions

export default todoSLice.reducer