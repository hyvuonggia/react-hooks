import React, { createContext, useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/TodoReducer';
import { GET_TODOS, SAVE_TODOS } from '../reducers/types';
;

;


export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    //State
    // const [todos, setTodos] = useState([]);
    const [todos, dispatch] = useReducer(todoReducer, [])

    //useEffect

    useEffect(() => {
        console.log('getting todos');
        const todos = localStorage.getItem('todos');
        if (todos) {
            dispatch({
                type: GET_TODOS,
                payload: null
            })
        }
    }, [])

    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: { todos: todos }
        })
    }, [todos])

    // const addTodo = (todo) => {
    //     setTodos([...todos, todo]);
    // }

    // const deleteTodo = (id) => {
    //     setTodos(todos.filter((todo) => todo.id !== id));
    // }

    //Data
    const todoContextData = {
        todos: todos,
        dispatch
    }

    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
