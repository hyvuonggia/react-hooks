import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { DELETE_TODO } from "../reducers/types";
const TodoItem = ({ todo }) => {
    //load theme context
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    //load todo context
    const { dispatch } = useContext(TodoContext);

    // function handleClick() {
    //     deleteTodo(todo.id);
    // }

    return (
        <li
            style={style}
            onClick={() => {
                dispatch({
                    type: DELETE_TODO,
                    payload: {
                        id: todo.id,
                    },
                });
            }}
        >
            {todo.title}
        </li>
    );
};

export default TodoItem;
