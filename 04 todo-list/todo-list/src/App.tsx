import './App.css'
import {useState} from "react";
import * as React from "react";
import TodoItem from "./TodoItem.tsx";

export type Todo = {
  id:number,
  text: string,
  completed: boolean,
}


const App : React.FC = () => {

  const [allTodos, setAllTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = () => {
    if (!newTodo.trim()) return // ignore empty task

    setAllTodos([ ...allTodos,
      { id: Date.now(), // id is current date and time
        text: newTodo.trim(), // extra whitespaces are removed from to-do text
        completed: false  // each to-do is uncompleted by default
      }])

    setNewTodo('')  // input value is emptied so user can add another to-do
  }

  const handleToggleTodo = (id: number) => {
    setAllTodos(allTodos.map(
        t => t.id === id ? {...t, completed: !t.completed } : t)
    )
    console.log(allTodos)
  }

  const handleDeleteTodo = (id: number) => {
    setAllTodos(allTodos.filter(t => t.id !== id));
  }

  return (
    <div className="app">
      <h1>To do list</h1>

      <div className="input-row">
        <input
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            onKeyDown={e => e.key === 'Enter' && handleAddTodo()}
        />
        <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {allTodos.map(t => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
        ))}
      </ul>
    </div>
  )
}

// App.defaultProps = {
//   id: 111,
//   text: 'Hello world',
//   completed: false
// };

export default App
