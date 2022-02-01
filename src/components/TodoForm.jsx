import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const TodoForm = (props) => {
    const [title, setTitle] = useState("");

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (title !== "") {
            props.addTodo({
                id: uuid(),
                title: title,
            });
        }
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Enter a new todo"
                value={title}
                onChange={handleChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
};

export default TodoForm;
