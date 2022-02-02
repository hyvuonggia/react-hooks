import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
const TodoItem = ({ todo }) => {
    //load theme context
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    //load todo context
    const { deleteTodo } = useContext(TodoContext);

    function handleClick() {
        deleteTodo(todo.id);
    }

    return (
        <li style={style} onClick={handleClick}>
            {todo.title}
        </li>
    );
};

export default TodoItem;
