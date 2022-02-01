import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";
const Todo = () => {
    const [todos, setTodos] = useState([
        { id: uuid(), title: "Viec 1" },
        { id: uuid(), title: "Viec 2" },
        { id: uuid(), title: "Viec 3" },
    ]);

    function addTodo(todo) {
        setTodos([...todos, todo]);
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div className="todo-list">
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Todo;
