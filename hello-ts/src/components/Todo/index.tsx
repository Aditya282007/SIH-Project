import React from "react";
import './style.css'
import TodoItem from "./Todoitem";

interface TodoItemProps {
    items: any;
    id: number;
    title: string;
}
const Todo: React.FC<TodoItemProps> = (props) => {
    return (
        <div className="todo-container">
            <ol>
                {
                    props.items.map((item: { title: string; }) => <TodoItem title= {item.title}/>)
                }
            </ol>
        </div>
    );
};

export default Todo;