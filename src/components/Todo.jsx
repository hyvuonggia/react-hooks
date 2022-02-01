import React, { useState } from "react";

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
                    return <li>{todo.title}</li>;
                })}
            </ul>
        </div>
    );
};

export default Todo;
