import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
    const [title, setTitle] = useState("");

    //load theme context
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    //load todo context
    const {addTodo} = useContext(TodoContext)

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (title !== "") {
            addTodo({
                id: uuid(),
                title: title,
            });
        }
        setTitle("");
    }

    return (
        <form style={style} onSubmit={handleSubmit}>
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
