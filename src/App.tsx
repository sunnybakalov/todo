import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // preventing rerenders on click

    if (todo) {
      setTodos([
        ...todos, { id: Date.now(), todo: todo, isDone: false }
      ]);
      setTodo('');
    }
  };

  const onDragEnd = (result: DropResult) => {
    console.log(result, 'result')
  }

  // console.log(todos);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <span className='heading'>Taskify</span>
        <InputField handleAdd={handleAdd} setTodo={setTodo} todo={todo} />
        <TodoList
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
