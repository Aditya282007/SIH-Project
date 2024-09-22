import React from "react";
import './style.css'
import TodoItem from "./Todoitem";

interface ITodoItem {
    id: number;
    title: string;
}

interface TodoProps{
    items : ITodoItem[];
}
const Todo: React.FC<TodoProps> = (props) => {
    return (
        <div className="todo-container">
            <ol>
                {
                    props.items.map(items => <TodoItem key={items.id} title={items.title} />)
                }
            </ol>
        </div>
    );
};

export default Todo;