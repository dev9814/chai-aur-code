import {TodoProvider} from './contexts/TodoContext'

import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState([]); // here the todos is whole array
  // In setTodos we get a callBack function

  // Here we start defining methods
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ?
    {...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  // useEffect helps us to talk to windows, outer file, databases
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    // Here we are bringing todos present in local window storage 
    // to add to todos

    if(todos && todos.length > 0){
      setTodos(todos)

      console.log(`local storage getItem ${todos}`);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

    console.log(`loca storage setItem ${todos}`);
  } ,[todos])

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo ,toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        { todos.map((todo) => (
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    </TodoProvider>
  )
}

export default App
