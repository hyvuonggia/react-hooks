import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Viec 1" },
        { id: 2, title: "Viec 2" },
        { id: 3, title: "Viec 3" },
    ]);

    

    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => {
                    return <TodoItem id={todo.id} title={todo.title} todo={todo}/>
                })}
            </ul>
        </div>
    );
};

export default Todo;
