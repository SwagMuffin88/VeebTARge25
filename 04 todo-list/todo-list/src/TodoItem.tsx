import type {Todo} from "./App.tsx";
import * as React from "react";

export type Props = {
    todo: Todo
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

const TodoItem : React.FC<Props> = ({todo, onToggle, onDelete}) => {
    return (
        <div>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <span>
                    {todo.text}
                    <button
                        onClick={() => onToggle(todo.id)}>
                        Mark done/undone
                    </button>
                </span>
                <button
                    onClick={() => {onDelete(todo.id)}}>Delete</button>
            </li>
        </div>
    )
}

export default TodoItem;