import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // preventing rerenders on click

    if (todo) {
      setTodos([
        ...todos, { id: Date.now(), todo: todo, isDone: false }
      ]);
      setTodo('');
    }
  };

  console.log(todos);

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField handleAdd={handleAdd} setTodo={setTodo} todo={todo} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;