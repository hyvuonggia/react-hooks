import React from "react";

const TodoItem = ({ todo }) => {
    const style = {
        background: "rgba(240, 240, 240)",
        color: "black",
    };

    return <li style={style}>{todo.title}</li>;
};

export default TodoItem;
