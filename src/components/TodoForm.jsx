import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../reducers/types";

const TodoForm = () => {
    const [title, setTitle] = useState("");

    //load theme context
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    //load todo context
    const { dispatch } = useContext(TodoContext);

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (title !== "") {
            dispatch({
                type: ADD_TODO,
                payload: {
                    todo: {
                        id: uuid(),
                        title: title,
                    },
                },
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
