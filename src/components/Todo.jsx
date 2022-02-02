import React, { useContext } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";
const Todo = () => {
    //load theme context
    const { todos } = useContext(TodoContext);

    //load auth context
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="todo-list">
            <TodoForm />
            {isAuthenticated ? (
                <ul>
                    {todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} />;
                    })}
                </ul>
            ) : (
                <p>You are not authenticated</p>
            )}
        </div>
    );
};

export default Todo;
