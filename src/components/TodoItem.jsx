import React from "react";

const TodoItem = (props) => {
    const style = {
        background: "rgba(240, 240, 240)",
        color: "black",
    };

    function handleClick() {
        props.deleteTodo(props.todo.id)
    }

    return <li style={style} onClick={handleClick}>{props.todo.title}</li>;
};

export default TodoItem;
